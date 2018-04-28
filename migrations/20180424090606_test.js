
exports.up = function(knex, Promise) {
    knex.schema.withSchema('test').hasTable('warehouses').then(function(exists) {
        if (!exists) {
          return knex.schema.withSchema('test').createTable('warehouses', function(t) {
            t.increments('warehouse_id').primary();
            t.string('name').notNullable().defaultTo('')
            t.string('phone').nullable()
            t.string('email').nullable()
            t.string('address').nullable()
            t.string('code').nullable()
            t.integer('sum_employee').nullable()
          })
        }
    })

    knex.schema.withSchema('test').hasTable('employees').then(function(exists) {
        if (!exists) {
          return knex.schema.withSchema('test').createTable('employees', function(t) {
            t.increments('employee_id').primary();
            t.string('name').notNullable().defaultTo('')
            t.integer('warehouse_id').unsigned()
            t.foreign('warehouse_id').references('warehouses.warehouse_id')
          })
        }
    })

    knex.schema.withSchema('test').hasTable('contacts').then(function(exists) {
        if (!exists) {
          return knex.schema.withSchema('test').createTable('contacts', function(t) {
            t.increments('contact_id').primary();
            t.string('phone').notNullable().defaultTo('')
            t.integer('employee_id').unsigned()
            t.foreign('employee_id').references('employees.employee_id')
          })
        }
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('test').dropTable('contacts').then(function(){
        return knex.schema.withSchema('test').dropTable('employees').then(function(){
            return knex.schema.withSchema('test').dropTable('warehouses')
        })
    })
}
