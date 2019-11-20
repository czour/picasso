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
    <div className="section-left" id="tan">
      <h1>Quality Printing. Legendary Service.</h1>
      <p>
      We are Picasso Brothers, your full-service printer. Specializing in a wide range of advertising specialties and corporate identity pieces, we are proud to serve Norcross and beyond. To place an order or get help with a new project, enter our online Customer Service Center. To download useful software and find helpful information, search our Resources & Support area.
      To learn more about Picasso Brothers Printing, browse through our Company Information section.
      An easy-to-use pulldown menu, search engine, and link to our contact form appear on each page. As well, feel free to consult the site map at any time if you're having trouble locating a particular item. If there's anything we can do to improve our site, please let us know.
      Enjoy your visit!
      </p>
      <img src={Img} height="309" width="320" alt="printer"/>
    </div>
    <div className="section-right" id="white">
      <h1>Let's Bring Your Best Ideas to Life.</h1>
      <p>
      We are a premier, one-stop custom printshop that proudly serves the local area.
      From banners and business cards to posters and postcards, our offset and digital
      printing experts are ready to turn your project into a thing of beauty.
      </p>
      <img
      src={Img3}
      className="d-inline-block align-top"
      height="309"
      width="320"
      alt="printer"
      />
    </div>
    <div className="section-left" id="green">
      <h1>Your brainchild is our inspiration.</h1>
      <p>
      Let us combine our printing and marketing expertise with the service necessary
      to take your project from concept to completion. Business cards to brochures,
      catalogs to calendars, we'll deliver what you need, on time.
      </p>
      <img
      src={Img2}
      className="d-inline-block align-top"
      height="309"
      width="320"
      alt="printer"
      />
    </div>
    </div> //######DEE6CA######
  );
}

export default Main;
