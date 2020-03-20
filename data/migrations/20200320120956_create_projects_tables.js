
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl
        .string('project_name')
        .notNullable();
      tbl
        .boolean('project_completed')
        .defaultTo(false);
      tbl
        .string('project_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments()
      tbl
        .string('task_description')
        .notNullable();
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .boolean('task_completed')
        .defaultTo(false);
      tbl
        .string('task_notes');
    })
    .createTable('resources', tbl => {
      tbl.increments()
      tbl
        .string('resource_name')
        .notNullable();
      tbl
        .string('resource_description');
    })
    .createTable('project_resources', tbl => {
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.primary(['project_id', 'resource_id']);
    })
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
