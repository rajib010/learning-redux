import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../store/slice/todoSlice.js";

const AddTodos = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput(""); 
        }
    };

    return (
        <form onSubmit={addTodoHandler}>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter a todo"
            />
            <input type="submit" value="Add Todo" />
        </form>
    );
};

export default AddTodos;
