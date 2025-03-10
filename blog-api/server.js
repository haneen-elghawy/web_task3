const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectMongoDB, pgPool } = require("./config/db"); // ✅ 
const { createAuthorTable } = require("./models/authorModel"); // ✅ 
const authorRoutes = require("./routes/authorRoutes"); // ✅ 
const postRoutes = require("./routes/postRoutes"); // ✅ 

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


connectMongoDB();
createAuthorTable();


app.get("/", (req, res) => {
  res.send("Welcome to the Blog API! 🚀");
});

app.use("/authors", authorRoutes); 
app.use("/posts", postRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
