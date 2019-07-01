exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "testing1@gmail.com",
          name: "testing1",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing1",
          sub: "58658969697"
        },
        {
          email: "testing2@gmail.com",
          name: "testing2",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing2",
          sub: "21689896974571895"
        },
        {
          email: "testing3@gmail.com",
          name: "testing3",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing3",
          sub: "88587477"
        },
        {
          email: "testing4@gmail.com",
          name: "testing4",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing4",
          sub: "21689986981891"
        },
        {
          email: "testing5@gmail.com",
          name: "testing5",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing5",
          sub: "549848"
        },
        {
          email: "testing6@gmail.com",
          name: "testing6",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing6",
          sub: "645645645"
        },
        {
          email: "testing7@gmail.com",
          name: "testing7",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing7",
          sub: "6868=="
        },
        {
          email: "testing8@gmail.com",
          name: "testing8",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing8",
          sub: "645645"
        },
        {
          email: "testing9@gmail.com",
          name: "testing9",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing9",
          sub: "645667868456"
        },
        {
          email: "testing10@gmail.com",
          name: "testing10",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing10",
          sub: "21689856938758541891"
        },
        {
          email: "testing11@gmail.com",
          name: "testing11",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing11",
          sub: "6454"
        },
        {
          email: "testing12@gmail.com",
          name: "testing12",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          nickname: "testing12",
          sub: "64545656727786"
        }
      ]);
    });
};
