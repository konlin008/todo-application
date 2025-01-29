import { useState } from "react"

export function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return <div>
        <input onChange={function (e) {
            setTitle(e.target.value)
        }}
            style={{
                padding: 10,
                margin: 10
            }}
            type="text" placeholder="Title"></input> <br />
        <input onChange={function (e) {
            console.log(e.target.value);

            setDescription(e.target.value)
        }}
            style={{
                padding: 10,
                margin: 10
            }}
            type="text" placeholder="Description"></input> <br />
        <button onClick={() => {
            fetch("http://localhost:3000/addTodo",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }

                }
            )
                .then(async function (res) {
                    await res.json()
                    alert("Todo added")

                })
        }}
            style={{
                padding: 10,
                margin: 10
            }}
        >
            Add ToDo
        </button>
    </div>
}