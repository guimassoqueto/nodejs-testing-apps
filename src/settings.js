import * as dotenv from 'dotenv';
dotenv.config()

const PGUSER = process.env["PGUSER"];
const PGHOST = process.env["PGHOST"];
const PGPASSWORD = process.env["PGPASSWORD"] ;
const PGDATABASE = process.env["PGDATABASE"] ;
const PGPORT = Number.parseInt(process.env["PGPORT"]);
const APP_PORT = Number.parseInt(process.env["APP_PORT"]);

export {
    PGUSER,
    PGHOST,
    PGPASSWORD,
    PGDATABASE,
    PGPORT,
    APP_PORT
}