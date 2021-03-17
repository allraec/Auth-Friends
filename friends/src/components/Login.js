import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:5000/api/login", credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("authToken", res.data.payload);
                setLoading(false);
                history.push("/protected")
            })
            .catch(err => {
                console.log(err)
            })
        console.log(`${credentials.username}, ${credentials.password}`)
    }

    return(
        <div>
            <form onSubmit={login}>
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login