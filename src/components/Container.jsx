import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import './Container.less';

// users screen that displays users
// login screen
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
          <NavLink to='/users'>Users</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          path='/'
          exact
          component={Login}
        />
        { /* or use a condition here */ }
        <Route
          path='/users'
          exact
          component={Users}
        />
      </main>
    </div>
  );
}

export default withRouter(Container);
