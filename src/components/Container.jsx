import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Quotes from './Quotes';
import './Container.less';

export function Container(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace('/');
  };

  return (
    <div className='container'>
      <nav>
        <span>
          <NavLink to='/'>Login</NavLink>
          <NavLink to='/quotes'>Quotes</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          path='/'
          exact
          component={Login}
        />

        <Route
          path='/quotes'
          exact
          component={Quotes}
        />
      </main>
    </div>
  );
}

export default withRouter(Container);
