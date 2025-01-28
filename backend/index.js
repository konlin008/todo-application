const express = require("express");
const app = express();

app.use(express.json());

app.post("/addTodo", (req, res) => {});
app.get("/checkTodos", (req, res) => {
  res.send("App is running");
});

app.put("/complete", (req, res) => {});

app.listen(3000);
