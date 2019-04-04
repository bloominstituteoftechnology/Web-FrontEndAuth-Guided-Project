import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // no token? Redirect to login screen!
    if (!localStorage.getItem('token')) {
      props.history.replace('/');
    }
  }, []);

  useEffect(() => {
    // fetch users
    axios
      .get('http://127.0.0.1:5000/api/users', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='users'>
      {users.map(u => (
        <li key={u.id}>{u.username}</li>
      ))}
    </div>
  );
}
