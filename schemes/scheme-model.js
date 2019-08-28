const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}


function find() {
  return db('schemes')
}


function findById(id) {
  return db('schemes').where({ id }).first() // call first() to get rid of array
}


function findSteps(id) {
  return db('steps as s') // Primary Table
  .join('schemes', 's.scheme_id', 'schemes.id') // Passing in secondary table name first and two columns that should match
  .select('s.id', 's.step_number', 's.instructions', 'schemes.scheme_name') // Selecting data you want to get
  .where({ scheme_id: id })
}


// Resolves to the newly inserted scheme, including id.
function add(scheme) {
  return db('schemes')
  .insert(scheme)
  .then(ids => {
    return findById(ids[0]) // returns posted new scheme
  })
}


// Resolves to the newly updated scheme object.
function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id)
    })
}

// Doesn't return deleted scheme
function remove(id) {
  return db('schemes')
    .where({ id })
    .del()
}

