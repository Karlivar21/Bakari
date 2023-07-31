import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const NavigationLink = ({
  title,
  href
}) => (
    <li className="navigation-link">  
        <a href = {href}>{title}</a>
    </li>
);

NavigationLink.propTypes = {
  // The title of the navigation link
  title: PropTypes.string.isRequired,
  // The URL of the navigation link
  href: PropTypes.string.isRequired
};