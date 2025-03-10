const { pgPool } = require("../config/db"); // ✅ 

const createAuthorTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS authors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
    );
  `;

  try {
    await pgPool.query(query); // ✅ 
    console.log("Author table created ✅");
  } catch (error) {
    console.error("Error creating authors table ❌", error);
  }
};

module.exports = { createAuthorTable };
