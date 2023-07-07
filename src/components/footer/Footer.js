import React from 'react';
import logo from '../../assets/img/logo2023.png';
import './footer.css';



function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          
        </div>
        <div className="footer-branding">
            <img className="logo" src={logo} alt="logo" />
            <p className="copyright">&#169; {year} Ben Hensor</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;