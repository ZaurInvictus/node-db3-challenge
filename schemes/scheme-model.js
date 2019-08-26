const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findSteps,
  add,
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes').where({ id })
}

// [ 
//   {
//     id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'
//   }, 
//   { 
//     id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'
//   }
// ]

function findSteps(id) {
  return db('schemes')
}


function add(schemeData) {
  return db('schemes').insert(schemeData)
}