import 'dotenv/config'
import pg from 'pg'
import { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT } from '../settings.js'

export const client = new pg.Client({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
})

await client.connect()