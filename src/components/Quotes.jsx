import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quotes(props) {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      props.history.push('/');
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quotes', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        setQuotes(res.data);
      })
      .catch(error => {
        console.log(error);
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
