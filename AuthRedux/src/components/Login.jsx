import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAuthUser } from '../store/slice/authSlice';
function Login() {

    const [input, setInput] = useState({ userName: '', password: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAuthUser(input));
        setInput({ userName: '', password: '' });
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }
    return (
        <div>
            <form method='post' onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <p>Username: </p>
                <input type="text" id="userName" value={input.userName} onChange={handleChange} /> <br />
                <p>Password: </p>
                <input type="password" id="password" value={input.password} onChange={handleChange} /> <br />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login