import React from 'react';
//import logo from './logo.svg';
import './Main.css';
import NavBar from './NavBar.js';
import Img from "./img/printer.png"
import Img2 from "./img/manufacturing.png"
import Img3 from "./img/retro.png"

function Main() {
  return (
    <div>
    <NavBar />
    <div className="section-head">
      <h1>Welcome to Picasso Brothers Printing</h1>
      <p>
      We are Picasso Brothers, your full-service printer. Specializing in a wide range of advertising specialties and corporate identity pieces, we are proud to serve Norcross and beyond. To place an order or get help with a new project, enter our online Customer Service Center. To download useful software and find helpful information, search our Resources & Support area.
      To learn more about Picasso Brothers Printing, browse through our Company Information section.
      An easy-to-use pulldown menu, search engine, and link to our contact form appear on each page. As well, feel free to consult the site map at any time if you're having trouble locating a particular item. If there's anything we can do to improve our site, please let us know.
      Enjoy your visit!
      </p>
      <img
      src={Img}
      className="d-inline-block align-top"
      height="309"
      width="320"
      alt="printer"
      />
    </div>
    <div className="section" id="sample-1">
      <h1>Lorem Ipsum</h1>
      <p>
      We are Picasso Brothers, your full-service printer. Specializing in a wide range of advertising specialties and corporate identity pieces, we are proud to serve Norcross and beyond. To place an order or get help with a new project, enter our online Customer Service Center. To download useful software and find helpful information, search our Resources & Support area.
      To learn more about Picasso Brothers Printing, browse through our Company Information section.
      An easy-to-use pulldown menu, search engine, and link to our contact form appear on each page. As well, feel free to consult the site map at any time if you're having trouble locating a particular item. If there's anything we can do to improve our site, please let us know.
      Enjoy your visit!
      </p>
      <img
      src={Img3}
      className="d-inline-block align-top"
      height="309"
      width="320"
      alt="printer"
      />
    </div>
    <div className="section" id="sample-2">
      <h1>Lorem Ipsum</h1>
      <p>
      We are Picasso Brothers, your full-service printer. Specializing in a wide range of advertising specialties and corporate identity pieces, we are proud to serve Norcross and beyond. To place an order or get help with a new project, enter our online Customer Service Center. To download useful software and find helpful information, search our Resources & Support area.
      To learn more about Picasso Brothers Printing, browse through our Company Information section.
      An easy-to-use pulldown menu, search engine, and link to our contact form appear on each page. As well, feel free to consult the site map at any time if you're having trouble locating a particular item. If there's anything we can do to improve our site, please let us know.
      Enjoy your visit!
      </p>
      <img
      src={Img2}
      className="d-inline-block align-top"
      height="309"
      width="320"
      alt="printer"
      />
    </div>
    </div>
  );
}

export default Main;
