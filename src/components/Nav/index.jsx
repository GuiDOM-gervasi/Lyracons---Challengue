import React, { useState } from "react";
import { StyledNav } from "./StyledNav";
import logo from "./img/logo_lyracons.png";
import { black, orange } from "../../containers/App/GlobalStyles";

const Nav = ({ setColor, setHello, setEmpty }) => {
  const [active, setActive] = useState(false)
  const handleColor = (e) => {
    e.type === "mouseenter" ? setColor(black) : setColor(orange);
  };

  const handleMenu = () => {
   active ? setActive(false) : setActive(true)
   console.log(active)
  }

  const handleHello = () => {
    setHello(true)
  }

  const handleEmpty = () =>{
    setEmpty(true)
  }

  return (
    <StyledNav active={active}>
      <i className="fas fa-bars" onClick={handleMenu}></i>
      <img src={logo} />
      <ul className="menu">
        <li className="menuItem1">
          MENU ITEM 1
          <ul className="subMenu">
            <li className="subli">Submenu Item 1</li>
            <li className="subli">Submenu Item 2</li>
            <li className="subli">Submenu Item 3</li>
          </ul>
        </li>
        <li onClick={handleEmpty}>MENU ITEM 2</li>
        <li
          className="menuItem3"
          onMouseEnter={(e) => handleColor(e)}
          onMouseLeave={(e) => handleColor(e)}
        >
          MENU ITEM 3
        </li>
        <li onClick={handleHello}>MENU ITEM 4</li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
