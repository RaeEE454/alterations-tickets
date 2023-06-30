const Pool = require("pg").Pool;

const pool = new Pool({
    user: "RaeE454",
    password: "postgres",
    port: 5432,
    host: "localhost",
    database: "alterationstickets"

})

module.exports = pool;