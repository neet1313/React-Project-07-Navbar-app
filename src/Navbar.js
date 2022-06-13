import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
// import Sidebar from "./Sidebar";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (toggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      //Div = the height of ul element which conatins variable no. of links
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleHandler}>
            <FaBars />
          </button>
        </div>

        <div className="links-container show-container" ref={linksContainerRef}>
          {/* Height of the sandwitch button links changes because the parent div 
          links-container being set to auto and important whose height is set to 0
          by default in another links-container class inside the css file*/}
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <SocialIcons onSocial={social} />
      </div>
    </nav>
  );
};

export default Navbar;
