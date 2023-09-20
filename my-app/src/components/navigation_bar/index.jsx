import React, { useState } from 'react';
import './styles.css';
import { NavigationLink } from '../navigation_link/index.jsx';
import coverlogo from '../../resources/coverlogo.png'

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="navigation-logo">
        <img src={coverlogo} alt="coverlogo" />
      </div>
      <button className="navigation-button" onClick={toggleMenu}>☰</button>
      <ul className={`navigation-links ${isOpen ? 'open' : ''}`}>
        <NavigationLink title="Forsíða" href="/"/>
        <div className="navigation-menu">
          <button className="navigation-menu__button"> Vörur <i className="fa fa-caret-down" aria-hidden="true"/></button>
          <ul className="navigation-menu__content">
            <NavigationLink title="Brauð" href="/braud"/>
            <NavigationLink title="Rúnstykki" href="/runstykki"/>
            <NavigationLink title="Bakkelsi" href="/bakkelsi"/>
            <NavigationLink title="Smurt" href="/smurt"/>
          </ul>
        </div>
        <NavigationLink title="Kökur" href="/kokur" />
        <NavigationLink title="Panta" href="/pantanir"/>
        <div className="navigation-menu-2">
        <NavigationLink title="Hafa samband" href="/hafa-samband"/>
        <NavigationLink title="Um okkur" href="/umokkur"/>
        </div>
      </ul>
    </nav>
  );
}