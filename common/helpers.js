const db = require("../data/dbConfig");

const get = tbl => db(tbl);

const findBy = (tbl, filter) =>
  db(tbl)
    .where(filter)
    .first();

const findAllBy = (tbl, filter) => db(tbl).where(filter);

const findAllByWithAircraft = id =>
  db("flights as f")
    .select("f.*", "a.make", "a.model", "a.ident")
    .join("aircrafts as a", "a.id", "f.aircraft_id")
    .where("f.user_id", id);

const findAllByWithAircraftByUser = (id, user_id) =>
  db("flights as f")
    .select("f.*", "a.make", "a.model", "a.ident")
    .join("aircrafts as a", "a.id", "f.aircraft_id")
    .where("f.user_id", user_id)
    .andWhere("f.id", id)
    .first();

const aggregatedChart = user_id =>
  db("flights as f")
    .select("a.make", "a.model")
    .count("a.id as count")
    .join("aircrafts as a", "f.aircraft_id", "a.id")
    .where("f.user_id", user_id)
    .groupBy("a.make", "a.model");

const findDailyFlightHourCountsInCurrentWeek = user_id =>
  db("flights")
    .select("date")
    .sum("duration as count")
    .where({ user_id })
    .groupBy("date")
    .orderBy("date");

const findTotalFlightInformation = user_id =>
  db("flights")
    .count("* as totalflightcount")
    .sum("duration as totalduration")
    .sum("day_landings as totaldaylandings")
    .sum("night_landings as totalnightlandings")
    .select({
      "totalpendingcount": db("flights")
        .count("*")
        .where({ user_id })
        .andWhere({ pending: 1 })
    })
    .where({ user_id })
    .first();

const add = (tbl, item) =>
  db(tbl)
    .insert(item)
    .returning("id");

const update = (tbl, filter, item) =>
  db(tbl)
    .where(filter)
    .update(item);

const remove = (tbl, filter) =>
  db(tbl)
    .where(filter)
    .del();

module.exports = {
  get,
  findBy,
  add,
  findAllBy,
  update,
  remove,
  findAllByWithAircraft,
  aggregatedChart,
  findDailyFlightHourCountsInCurrentWeek,
  findAllByWithAircraftByUser,
  findTotalFlightInformation
};
