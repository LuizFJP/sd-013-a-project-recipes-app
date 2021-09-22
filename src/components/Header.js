import React from 'react';
import propTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

const renderButton = () => (
  <button type="button">
    <img src={ searchIcon } alt="search Icon" data-testid="search-top-btn" />
  </button>
);

function Header({ title, hasSearchIcon }) {
  return (
    <header>
      <button type="button">
        <img src={ profileIcon } alt="search Icon" data-testid="profile-top-btn" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      {
        hasSearchIcon && renderButton()
      }
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  hasSearchIcon: propTypes.bool.isRequired,
};

export default Header;
