const express = require("express");
const { pool } = require("../config/db");
const router = express.Router();


router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query("INSERT INTO authors (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM authors");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
