"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionString = "postgresql://kris:LDC@1912!@128.123.177.184:5435/gisdb?schema=public_test";
const db = new pg_1.Pool({
    connectionString,
});
db.on("error", (error) => {
    console.error(error.message);
});
exports.default = db;
