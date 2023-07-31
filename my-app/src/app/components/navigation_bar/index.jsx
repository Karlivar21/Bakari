import React from 'react';
import './styles.css';
import { NavigationLink } from '../navigation_link/index.jsx';
import coverlogo from '../../resources/coverlogo.png'

export const NavigationBar = () => {

  return (
    <nav className="navigation-bar">
      <div className="navigation-logo">
        <img src={coverlogo} alt="coverlogo" />
      </div>
      <ul className="navigation-links">
        <NavigationLink title="Forsíða" href="/"/>
        <div className="navigation-menu">
          <button className="navigation-menu__button"> Vörur <i className="fa fa-caret-down"/></button>
          <ul className="navigation-menu__content">
            <NavigationLink title="Brauð" href="/braud"/>
            <NavigationLink title="Rúnstykki" href="/runstykki"/>
            <NavigationLink title="Bakkelsi" href="/bakkelsi"/>
          </ul>
        </div>
        <NavigationLink title="Kökur" href="/kokur" />
        <NavigationLink title="Panta" href="/pantanir"/>
        <NavigationLink title="Hafa samband" href="/hafa-samband"/>
        <NavigationLink title="Um okkur" href="/umokkur"/>
      </ul>
    </nav>
  );
}