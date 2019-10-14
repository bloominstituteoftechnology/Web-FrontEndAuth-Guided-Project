import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axios';

export default function Quotes(props) {
  const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     props.history.push('/');
  //   }
  // }, []);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/quotes')
    .then(res => {
      setQuotes(res.data);
    })
    .catch(error => {
      alert(error.response.data.message);
    });
  }, []);

  return (
    <div className='quotes'>
      {quotes.map(q => (
        <li key={q.id}>
          {q.text}
        </li>
      ))}
    </div>
  );
}
