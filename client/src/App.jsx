import { useState } from "react"
import { CreateTodo } from "./components/createTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/checkTodos")
    .then(async function (res) {
      const json = await res.json()
      setTodos(json.todo)
    })

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
