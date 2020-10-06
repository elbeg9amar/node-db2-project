
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 2, VIN: '1FAHP3H28CL344500' , make: 'BMW ' , model: ' R1200C CLASSIC', mileage: '2454181'},
        { VIN: '1FAHP3H28CL327518' , make: 'BMW ' , model: ' R1200C CLASSIC', mileage: '2454181'}
      ]);
    });
};
