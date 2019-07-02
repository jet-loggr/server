exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("aircrafts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("aircrafts").insert([
        {
          ident: "123",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 1
        },
        {
          ident: "1234",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 2
        },
        {
          ident: "125",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 3
        },
        {
          ident: "126",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 4
        },
        {
          ident: "136",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 5
        },
        {
          ident: "128",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 6
        },
        {
          ident: "118",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 7
        },
        {
          ident: "149",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 8
        },
        {
          ident: "192",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 9
        },
        {
          ident: "181",
          make: "CRJ",
          model: "900",
          engine_count: 2,
          engine_type: "JET",
          remarks: "This is a very nice plane",
          user_id: 10
        }
      ]);
    });
};
