const zod = require("zod");
const creatTodo = zod.object({
  title: zod.String(),
  description: zod.String(),
});

const updateTodo = zod.object({
  id: zod.String(),
});

module.exports = {
  creatTodo: creatTodo,
  updateTodo: updateTodo,
};
