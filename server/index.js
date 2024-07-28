const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Home Page" });
});

app.get("/todo", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo_table");
    res.json(todos.rows);
  } catch (error) {
    res.json(error);
  }
});

app.get("/todo/:id", async(req, res) => {
    try {
        
    } catch (error) {
        res.json(error)
    }
})

app.put("/todo/:id", async(req, res) => {
    try {
        
    } catch (error) {
        res.json(error)
    }
})

app.delete("/todo/:id", async(req, res) => {
    try {
        
    } catch (error) {
        res.json(error)
    }
})

app.delete("/todo", async(req, res) => {
    try {
        
    } catch (error) {
        res.json(error)
    }
})

app.post("/todo", async (req, res) => {
  try {
    const { desc, completed } = req.body;
    console.log(desc, completed);
    const new_todo = await pool.query(
      "INSERT INTO todo_table (todo_desc, todo_completed) VALUES($1, $2) RETURNING *",
      [desc, completed]
    );

    res.json({ new_todo, msg: "Todo added", success: true });
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on PORT ${PORT}..!`);
});
