import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [flash, setFlash] = useState('');

  const submit = () => {
    // attempt login!
    // on success, set token to local storage, set a flash message
    // on failure, set a flash message with the error
    axios
      .post('http://127.0.0.1:5000/api/auth/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setFlash(res.data.message);
        } else {
          setFlash(`Wrong username or password`);
        }
      })
      .catch(err => {
        setFlash(err.message);
      });
  };

  return (
    <div className='login'>
      <div className='login-inputs'>
        username <input ref={usernameRef} type='text' /> <br />
        password <input ref={passwordRef} type='text' />
      </div>

      <div>
        <button onClick={submit}>Submit</button>

        <div className='flash'>{flash}</div>
      </div>
    </div>
  );
}
