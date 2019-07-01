exports.up = function(knex) {
  return knex.schema.createTable("aircrafts", tbl => {
    tbl.increments();
    tbl.string("ident");
    tbl.string("make");
    tbl.string("model");
    tbl.integer("engine_count");
    tbl.string("engine_type");
    tbl.string("remarks");
    tbl
      .integer("flight_id")
      .references("id")
      .inTable("flights");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("aircrafts");
};
