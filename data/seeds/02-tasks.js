
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "Add legs to desktop", project_id: 1},
        {task_description: "Screw in legs", project_id: 1, task_notes: "Requires screwdriver"},
        {task_description: "Beat eggs", project_id: 2, task_completed: true, task_notes: "Requires egg beater"},
        {task_description: "Add mix", project_id: 2}
      ]);
    });
};
