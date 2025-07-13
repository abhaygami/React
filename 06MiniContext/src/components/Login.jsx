import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({username , password});
    }

  return (
    <>
        <h1>Login</h1>
        <input 
            type="text"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />

        <input 
            type="text"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}    
        />

        <button onClick={HandleSubmit}>Click</button>


    </>
  )
}

export default Login
