const db = require("../data/dbConfig");

const get = tbl => db(tbl);

const findBy = (tbl, filter) =>
  db(tbl)
    .where(filter)
    .first();

const add = (tbl, item) =>
    db(tbl)
      .insert(item)
      .returning("id");

module.exports = {
    get,
    findBy,
    add
}