const connection = require('./connection')

//fetching all the data
function getBirds(db = connection) {
  return db('birds').select()
}

//fetching data by id
function getBirdById(id, db = connection) {
  return db('birds').where('id', id).select()
}

module.exports = {
  getBirds,
  getBirdById,
}
