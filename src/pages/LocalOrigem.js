import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Header from '../components/Header';

function LocalOrigem() {
  return (
    <div>
      <Header
        profile={
          <Link to="/perfil">
            <img alt="profile" data-testid="profile-top-btn" src={ profileIcon } />
          </Link>
        }
        title="Explorar Origem"
        search={
          <Link to="/explorar">
            <img alt="search" data-testid="search-top-btn" src={ searchIcon } />
          </Link>
        }
      />
    </div>
  );
}

export default LocalOrigem;
