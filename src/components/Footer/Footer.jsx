import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>Question? Call 1-866-579-1999</p>
        <div className="footer-cols">
          <ul>
            <li>
              <Link to="#" href="#">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Investor Relations
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Corporate Information
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Netflix Originals
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#" href="#">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#" href="#">
                Account
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Redeem Gift Cards
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Speed Test
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#" href="#">
                Account
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Redeem Gift Cards
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="#" href="#">
                Speed Test
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
