import * as React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Login from './Login';
import MyComponent from './MyComponent';

const App = () => {
  const routes = [
    { path: '/', element: <Home />, label: 'Home' },
    { path: '/login', element: <Login />, label: 'Login' },
    { path: '/mycomponent', element: <MyComponent />, label: 'My Component' },
  ];

  return (
    <BrowserRouter>
      <div>
        <Header />
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <NavLink to={route.path} className={({ isActive }) => isActive ? "active" : ""}>
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;