
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:2ED3*AbaG14b2CC4dcg*6bbGcde-acfG@postgres.railway.internal:5432/railway',
  ssl: {
    rejectUnauthorized: false, // Only use this for local development, not in production
  },
});

module.exports = pool;
