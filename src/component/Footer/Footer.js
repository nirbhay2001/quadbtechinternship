import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="/playstore.png" alt="playstore" />
        <img src="Appstore.png" alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>TV SHOWS.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; NirbhayGupta</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/mohit.g2001">Instagram</a>
        <a href="http://youtube.com/NirbhayGupta">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

