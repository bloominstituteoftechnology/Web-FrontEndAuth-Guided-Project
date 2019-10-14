import React, { useRef } from 'react';
import axiosWithAuth from '../axios';


export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    axiosWithAuth().post('http://localhost:5000/login', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className='login'>
      <div className='login-inputs'>
        username <input ref={usernameRef} type="text" />
        <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}
