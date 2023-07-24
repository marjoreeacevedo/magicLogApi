const { Pool } = require("pg")

const config = new Pool({
    user: "postgres",
    host: "localhost",
    password: "101",
    port: 5432,
});

const pool = new Pool(config);

module.exports = pool;