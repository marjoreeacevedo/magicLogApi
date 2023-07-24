const { Pool } = require("pg")

const config = {
    user: "postgres",
    host: "localhost",
    password: "101",
    port: 5432
};

const pool = new Pool(config);

module.exports = pool;