import * as React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Login from './Login';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/mycomponent">My Component</NavLink>
          </li>
        </ul>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mycomponent" element={<MyComponent />} />
      </div>
    </BrowserRouter>
  );
};

export default App;