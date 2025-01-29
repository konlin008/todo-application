

export function Todos({ todos, setTodos }) {
    return <div>
        {todos.map(function (todo, index) {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {
                    const newTodos = [...todos];
                    newTodos[index] = { ...newTodos[index], complete: true };
                    setTodos(newTodos);
                }}
                >{todo.complete == true ? "completed" : " Mark As Complete"} </button>
            </div>
        })}
    </div>
}