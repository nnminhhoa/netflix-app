import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import NetFlixLogo from "../../assets/images/NetFlixLogo.png";
import NetFlixAvatar from "../../assets/images/NetflixAvatar.png";

const Nav = () => {
  const [show, setShow] = useState(false);
  const NavBarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavBarVisibility);
    return () => {
      window.removeEventListener("scroll", NavBarVisibility);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <Link to="/">
        <img src={NetFlixLogo} alt="logo" className="nav-logo" />
      </Link>
      <img src={NetFlixAvatar} alt="avatar" className="nav-avatar" />
    </div>
  );
};

export default Nav;
