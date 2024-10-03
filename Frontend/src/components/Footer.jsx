import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Greamio Technologies. All rights reserved.</p>
      <div className="social-links">
        <button onClick={() => alert("Facebook coming soon!")}>Facebook</button>
        <button onClick={() => alert("Twitter coming soon!")}>Twitter</button>
        <button onClick={() => alert("LinkedIn coming soon!")}>LinkedIn</button>
      </div>
    </footer>
  );
};

export default Footer;
