exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("flights")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("flights").insert([
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 1,
          aircraft_id: 1
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 2,
          aircraft_id: 2
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 3,
          aircraft_id: 3
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 4,
          aircraft_id: 4
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 5,
          aircraft_id: 5
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 6,
          aircraft_id: 6
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 7,
          aircraft_id: 7
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 8,
          aircraft_id: 8
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 9,
          aircraft_id: 9
        },
        {
          flight_number: "AA220",
          trip_number: "321",
          duty_on: "2019-07-01T18:57:14.831Z",
          duty_off: "2019-07-01T18:57:14.831Z",
          hotel: "Sheraton",
          duty_time: 1.5,
          deadhead: true,
          approaches: 2,
          remarks: "Testing this flight thing",
          pending: false,
          date: "2019-07-01",
          route_start: "RDU",
          route_end: "MIA",
          legs: 2,
          day_landings: 1,
          night_landings: 2,
          duration: 2,
          user_id: 10,
          aircraft_id: 10
        }
      ]);
    });
};
