
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import 'dotenv/config';

const databaseUrl = process.env.DATABASE_URL.replace('sqlite://', '');

const dbPromise = open({
  filename: databaseUrl,
  driver: sqlite3.Database
});

export default dbPromise;