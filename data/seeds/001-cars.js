
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')    
    .truncate()//removes all rows from the table and reset id back to 1
    .then(function () {
      // Inserts seed entries by calling the generatedData function
      return knex('cars').insert(generateData());
    });
};

function generateData(){
  return [
    {
      VIN: '2324567',
      make: 'Toyota',
      model: '2001',
      mileage: 6789000,
      transmissionType: "Automatic",
      statusOfTitle: "Active"
    },
    {
      VIN: '876519',
      make: 'Honda',
      model: '1998',
      mileage: 900000,
      transmissionType: "Manual",
      statusOfTitle: "Active"
    },
    {
      VIN: '617893',
      make: 'Mercedes',
      model: '2018',
      mileage: 30000,
      transmissionType: "Automatic",
      statusOfTitle: "Active"
    }
  ]
}