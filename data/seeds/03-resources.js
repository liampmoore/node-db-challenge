
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Screwdriver"},
        {resource_name: "Eggs", resource_description: "Large brown"},
        {resource_name: "Cake mix", resource_description: "Chocolate"},
      ]);
    });
};
