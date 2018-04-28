
exports.seed = function(knex, Promise) {
  return knex('warehouses').del().then(function () {
      return knex('warehouses').insert([
        {warehouse_id: 1, name: 'TX1', phone: '0123456789', address: '123 TX1', email: 'TX1@gmail.com', code: '123TX1A1', sum_employee: 3},
        {warehouse_id: 2, name: 'TX1', phone: '0123456788', address: '123 TX2', email: 'TX2@gmail.com', code: '123TX2A2', sum_employee: 4},
        {warehouse_id: 3, name: 'TX3', phone: '0123456787', address: '123 TX3', email: 'TX3@gmail.com', code: '123TX3A3', sum_employee: 4},
        {warehouse_id: 4, name: 'TX4', phone: '0123456786', address: '123 TX4', email: 'TX4@gmail.com', code: '123TX4A4', sum_employee: 5},
      ])
  }).then(function(){
    return knex('employees').del().then(function(){
      return knex('employees').insert([
        {employee_id: 1, name: 'Employee 1', warehouse_id: 1},
        {employee_id: 2, name: 'Employee 2', warehouse_id: 2},
        {employee_id: 3, name: 'Employee 3', warehouse_id: 1},
        {employee_id: 4, name: 'Employee 4', warehouse_id: 3},
        {employee_id: 5, name: 'Employee 5', warehouse_id: 3},
      ])
    })
  }).then(function(){
    return knex('contacts').del().then(function(){
      return knex('contacts').insert([
        {contact_id: 1, phone: '012345612', employee_id: 1},
        {contact_id: 2, phone: '010101021', employee_id: 2},
        {contact_id: 3, phone: '090292913', employee_id: 1},
        {contact_id: 4, phone: '016878114', employee_id: 3},
        {contact_id: 5, phone: '016551235', employee_id: 4},
      ])
    })
  })
}
