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
    .andWhere("f.id", id);

const aggregatedChart = id =>
  db.raw(
    `SELECT  make, model, COUNT(*) FROM flights as f JOIN aircrafts as a ON a.id = f.aircraft_id WHERE f.user_id = ${id} GROUP BY  make, model`
  );

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
  findAllByWithAircraftByUser
};
