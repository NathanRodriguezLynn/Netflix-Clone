import React,{useEffect, useState} from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          //window.removeEventListener("scroll");
        };
      }, []);
  return (
    <div className={`Nav ${show && "nav_black"}`}>
        <img className="nav_logo"  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"></img>
        <img className="nav_avatar"
        alt="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  )
}

export default Nav;
