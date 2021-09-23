import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../components/Button';

// import { Header, Footer } from '../components';

const Explorer = () => (
  <div>

    {/* <Header /> */ }

    <Link to="/comidas">
      <Button
        id="explore-food"
        type="button"
        buttonText="Explorar Comidas"
      />
    </Link>

    <Link to="/bebidas">
      <Button
        id="explore-drinks"
        type="button"
        buttonText="Explorar Bebidas"
      />
    </Link>

    {/* <Footer /> */ }

  </div>
);

export default Explorer;
