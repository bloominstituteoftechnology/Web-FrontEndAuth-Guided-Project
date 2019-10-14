import React, { useState, useRef } from 'react';
import axios from 'axios';


export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [flash, setFlash] = useState(''); // [ sliceofstate, setstate ]

  const submit = () => {
    props.login({ username, password });
  };

  return (
    <div className='login'>
      <div className='login-inputs'>
        username <input ref={usernameRef} type="text" /> <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>
          Submit
        </button>

        <div className='flash'>{flash}</div>
      </div>
    </div>
  );
}
