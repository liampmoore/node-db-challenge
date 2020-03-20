
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Build ikea desk', project_completed: false, project_description: "Have to create an ikea desk"},
        {project_name: 'Bake a cake'}
      ]);
    });
};
