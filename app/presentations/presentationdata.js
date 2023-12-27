// pages/api/data.js

import pool from "./db";

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    console.log(client)
    const result = await client.query('SELECT * FROM presentation');
    client.release();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
