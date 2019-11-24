import React from 'react';
//import logo from './logo.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footer" id="white">
    <h1>Get Started Today!</h1>
    <button type="button">Place An Order</button>
    <button type="button">Get A Quote</button> 
    <hr></hr>
    <p>1346 Oakbrook Drive</p>
    <p>Suite 155</p>
    <p>Norcross, Georgia 30093</p>
    <p>Phone: 770.452.0320</p>
    <p>Fax: 770.452.3932</p>
    <p>E-mail: picassobros@picassobrothersprinting.com</p>
    <p>9:00 am to 5:00 pm (Monday thru Friday)</p>
    <div className ="vl"></div>
    </div>
  );
}

export default Footer;
