import React from 'react';
import './Signup.css'; 
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className =" SignUp">
    <div className="signup-container">
    
      <div className="signup-header">
        <h1>Join Medium.</h1>
      </div>

      
      <div className="signup-buttons">
        <div className="signup-button google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
          <span>Sign up with Google</span>
        </div>
        <div className="signup-button facebook-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook logo" />
          <span>Sign up with Facebook</span>
        </div>
        <div className="signup-button email-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Envelope_font_awesome.svg" alt="Email icon" />
          <span>Sign up with email</span>
        </div>
      </div>

      {/* Sign In Section */}
      <div className="signin-section">
        <p>
          Already have an account? <Link to="/login" className="signin-link">Sign in</Link>
        </p>
      </div>

      {/* Terms Section */}
      <div className="terms-section">
        <p>
          Click “Sign up” to agree to Medium’s <a href="/terms">Terms of Service</a> and acknowledge that Medium’s <a href="/privacy">Privacy Policy</a> applies to you.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
