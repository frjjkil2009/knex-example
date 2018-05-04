var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'root',
      database : 'test',
      charset: 'utf8'
    }
  })

  var query = knex('warehouses').join('employees', 'warehouses.warehouse_id', 'employees.warehouse_id').join('contacts', 'employees.employee_id', 'contacts.employee_id')
  console.log(query.toSQL())
  return query.then(function(result){
    console.log(result)
  })

  // return knex.transaction(function(trx){
  //   return trx.insert({name: 'test'}).into('warehouses').returning('warehouse_id').then(function(warehouseId){
  //     return trx.insert({name: {}, warehouse_id: warehouseId}).into('employees').then(trx.commit).catch(function(err){
  //       console.log('employees rollback', err)
  //       trx.rollback()
  //     })
  //   }).then(trx.commit).catch(function(err){
  //     console.log('warehouses rollback', err)
  //     trx.rollback()
  //   })
  // }).then(function(response){
  //   console.log('success', response)
  // }).catch(function(err){
  //   console.log('error all', err)
  // })

  // async function run(){
  //   knex.transaction(async function(trx){
  //     try{
  //       let a = await trx.insert({name: 'test'}).into('warehouses').returning('warehouse_id')
  //       console.log(a)
  //       await trx.commit()
  //     }catch(err){
  //       await trx.rollback()
  //     }
  //   })
  // }

  // return knex.transaction(function(trx){
  //   return knex.insert({name: 'testDataWarehouse'}).into('warehouses').transacting(trx).then(function(warehouseId){
  //     return knex.insert({name: {}, warehouse_id: warehouseId}).into('employees').transacting(trx).then(trx.commit).catch(trx.rollback)
  //   }).then(trx.commit).catch(trx.rollback)
  // }).then(function(response){
  //   console.log('success', response)
  // }).catch(function(err){
  //   console.log('error', err)
  // })

  // run()