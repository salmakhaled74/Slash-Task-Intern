import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      {/* Footer Component */}
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            {/* Company Section */}
            <div className="col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Test</a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
              </ul>
            </div>

            {/* Online Shop Section */}
            <div className="col">
              <h4>Online Shop</h4>
              <ul>
                <li>
                  <a href="#">Watch</a>
                </li>
                <li>
                  <a href="#">Bag</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">Dress</a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="col">
              <h4>Follow Us</h4>
              <div className="social">
                {/* Social Icons */}
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
