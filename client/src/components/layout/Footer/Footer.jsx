import React from 'react'
import './footer.css'
import playStore from "../../../image/playstore.png";
import appStore from "../../../image/Appstore.png";
import logo from "../../../image/logo-2.png";

const Footer = () => {
    return (
        <>
              <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img src={logo} alt="" />
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Salman Azmi Rafi</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/salmanazmirafi">Instagram</a>
        <a href="http://youtube.com/salmanazmirafi">Youtube</a>
        <a href="http://instagram.com/salmanazmirafi">Facebook</a>
      </div>
    </footer>
        </>
    )
}

export default Footer
