const knex = require("knex");

const knexfile = require("../knexfile");

const envoironment = process.env.DB_ENV || "development";

module.exports = knex(knexfile[envoironment]);
