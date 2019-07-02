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

const findAircraftUsageFrequencyCountsByUser = id =>
  db("flights")
    .count("aircraft_id")
    .where("user_id", id)
    .groupBy("aircraft_id");

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
  findAllByWithAircraft
};
