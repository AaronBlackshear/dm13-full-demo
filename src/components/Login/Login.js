import React from "react";

import './login.css';

const Login = () => (
  <div className="button-container">
    <a href={process.env.REACT_APP_LOGIN}>
      <button className="login">Login</button>
    </a>
  </div>
);

export default Login;
