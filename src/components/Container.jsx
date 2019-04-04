import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import './Container.less';

export function Container(props) {
  const onLogout = () => {
    localStorage.removeItem('token');
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
        <Route path='/' exact component={Login} />
        <Route path='/users' exact component={Users} />
      </main>
    </div>
  );
}

export default withRouter(Container); // make Router props (history, match, ...) available to this component with `withRouter` HOC
