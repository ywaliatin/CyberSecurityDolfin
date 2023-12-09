// Footer2.js

import React from 'react';
import './Footer2.css';

const Footer2 = () => {
  return (
    <footer className= "footer">
      <div className="footerContainer">

        {/* First column */}
        <div className= "footerColumn">
          <h3>News</h3>
          <ul>
            
            <li><a href="#">Recent Articles</a></li>
            {/* Additional links for the first column can be added here */}
          </ul>
        </div>

        {/* Second column */}
        <div className="footerColumn">
          <h3>Corporate Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li> {/* Example new item */}
             {/* Additional links for the second column can be added here */}
          </ul>
        </div>

        {/* Third column */}
        <div className="footerColumn">
          <h3>Delivery, Returns and Payment</h3>
          <ul>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns Policy</a></li> {/* Example new item */}
            <li><a href="#">Payment Options</a></li> {/* Example new item */}
            {/* Additional links for the third column can be added here */}
          </ul>
        </div>

        {/* Fourth column */}
        <div className="footerColumn">
          <h3>Terms and Conditions</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li> {/* Example new item */}
            <li><a href="#">User Agreement</a></li> {/* Example new item */}
            {/* Additional links for the fourth column can be added here */}
          </ul>
        </div>

      </div>

      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Dolfin Cyber News. All Rights Reserved.</p>
        {/* Add social media icons or additional information here */}
      </div>
    </footer>
  );
};

export default Footer2;
