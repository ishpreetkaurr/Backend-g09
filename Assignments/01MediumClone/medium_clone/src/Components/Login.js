import React from 'react';
import './Login.css';
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <h2>Welcome back.</h2>
        <div className="social-login-buttons">
          <button className="login-btn google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" />
            Sign in with Google
          </button>
          <button className="login-btn facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            Sign in with Facebook
          </button>
          <button className="login-btn apple">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
            Sign in with Apple
          </button>
          <button className="login-btn twitter">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6f/Twitter_Logo_as_of_2023.svg" alt="X" />
            Sign in with X
          </button>
          <button className="login-btn email">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Envelope-font-awesome.svg" alt="Email" />
            Sign in with email
          </button>
        </div>
        <p>No account? <Link to="/signup">Create one</Link></p>
        <p className="help-text">
          Forgot email or trouble signing in? <a href="/help">Get help</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
