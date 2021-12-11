import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input type='text' placeholder='Enter Username' />
        </div>
        <div>
          password: <input type='password' placeholder='Enter Password' />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login;
