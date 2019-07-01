exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("email");
    tbl.string("image_url");
    tbl.string("nickname");
    tbl.string("sub");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
