const cofig = require("../../../knexfile")
const knex = require("knex")

const connection = knex(cofig.development)

module.exports = connection
