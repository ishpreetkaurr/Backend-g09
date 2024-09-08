import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Medium</div>
        <nav className="nav-links">
          <a href="/">Our story</a>
          <a href="/">Membership</a>
          <a href="/">Write</a>
          <Link to="/login" className="sign-in-btn">Sign in</Link>
          <Link to ="/signup" ><button className="get-started-btn">Get started</button></Link>
        </nav>
      </header>
      <div className = "main">
        <div className="left">
        <h1>Human stories & ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <Link to="/signup"><button className="start-reading-btn">Start reading</button></Link>
        </div>
        <div className = "right">
            <img  src ="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"></img>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li>Help</li>
          <li>Status</li>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Text to speech</li>
          <li>Teams</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
