import React from 'react';
import { useMutation } from '@tanstack/react-query'
import { login } from '../../API/auth';

const mutation = useMutation ({
  mutationKey: ["legin"],
    mutationFn: (userInfo)=>login(userInfo)
})
const handleFormSubmit = (event) => {
    event.preventDefault();
}


function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
