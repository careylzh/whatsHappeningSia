import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/find-kaki" activeStyle>
            Find a Kaki!
          </NavLink>
          <NavLink to="/news-feed" activeStyle>
            News Feed
          </NavLink>
          <NavLink to="/chat" activeStyle>
            Chat
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
