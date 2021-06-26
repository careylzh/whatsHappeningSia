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
          <NavLink to="/locate-me" activeStyle>
            Locate Me
          </NavLink>
          <NavLink to="/news-feed" activeStyle>
            News Feed
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
