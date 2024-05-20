import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>

            {/* state is being shown as undefined */}
            {/* {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))} */}
        </div>
    )
}

export default Todos