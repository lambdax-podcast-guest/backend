
exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
      table.increments('id').primary();
      table.string('username', 128).unique().notNullable();
      table.text('bio');
      table.string('location');
      table.boolean('is_host');
      table.boolean('is_guest');
      table.boolean('is_premium');
      table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
