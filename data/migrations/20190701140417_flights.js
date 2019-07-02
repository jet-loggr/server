exports.up = function(knex) {
  return knex.schema.createTable("flights", tbl => {
    tbl.increments();
    tbl.string("flight_number");
    tbl.string("trip_number");
    tbl.string("duty_on");
    tbl.string("duty_off");
    tbl.string("hotel");
    tbl.double("duty_time");
    tbl.boolean("deadhead").defaultsTo(false);
    tbl.integer("approaches");
    tbl.string("remarks");
    tbl.boolean("pending").defaultsTo(true);
    tbl.string("date");
    tbl.string("route_start");
    tbl.string("route_end");
    tbl.integer("legs");
    tbl.integer("day_landings");
    tbl.integer("night_landings");
    tbl.double("duration");
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users");
    tbl
      .integer("aircraft_id")
      .references("id")
      .inTable("aircrafts");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("flights");
};
