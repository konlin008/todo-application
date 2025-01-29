const express = require("express");
const { createTodo, updateTodo } = require("./type");
const todos = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/addTodo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent a wrong input ",
    });
    return;
  }

  await todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created ",
  });
});

app.get("/checkTodos", async (req, res) => {
  const todo = await todos.find();
  res.json({ todo });
});

app.put("/complete", async (req, res) => {
  const updatePayload = req.body;
  const parsedUpPAyload = updateTodo.safeParse(updatePayload);

  if (!parsedUpPAyload.success) {
    res.status(411).json({
      msg: "You Sent a wrong input",
    });
    return;
  }
  await todos.update(
    {
      _id: req.body.id,
    },
    {
      complete: true,
    }
  );

  res.json({
    msg: "Your Todo Marked As completed",
  });
});

app.listen(3000, () => {
  console.log("The Server is Running on Port 3000");
});
