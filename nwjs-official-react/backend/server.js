import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//example route
app.get("/products", (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
