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

[ 
  {
    id: 17, 
    step_number: 1, 
    instructions: 'quest',
    scheme_name: 'Find the Holy Grail'
  }
]
//This array should include the scheme_name not the scheme_id.

function findSteps(id) {
  return db('steps as s') // Primary Table
  .join('schemes', 's.scheme_id', 'schemes.id') // Passing in secondary table name first and two columns that should match
  .select('s.id', 's.step_number', 's.instructions', 'schemes.scheme_name') // Selecting data you want to get
  .where({ scheme_id: id })
}


function add(schemeData) {
  return db('schemes').insert(schemeData)
}