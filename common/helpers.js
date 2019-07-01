const db = require("../data/dbConfig");

const get = tbl => db(tbl);

const findBy = (tbl, filter) =>
  db(tbl)
    .where(filter)
    .first();

const findAllBy = (tbl, filter) => db(tbl).where(filter);

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
  remove
};
