const { Pool } = require("pg"); 
const mongoose = require("mongoose"); 
require("dotenv").config(); 

const pgPool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pgPool
  .connect()
  .then(() => console.log("Connected to PostgreSQL ✅"))
  .catch((err) => console.error("PostgreSQL Connection Error ❌", err));


const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("MongoDB Connection Error ❌", error);
    process.exit(1);
  }
};

module.exports = { pgPool, connectMongoDB };
