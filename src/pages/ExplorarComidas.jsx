import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ExplorarComidas = () => (
  <div>
    <Link to="/explorar/comidas/ingredientes">
      <button type="button" data-testid="explore-by-ingredient">Por Ingredientes</button>
    </Link>
    <Link to="/explorar/comidas/area">
      <button type="button" data-testid="explore-by-area">Por Local de Origem</button>
    </Link>
    <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
    <Footer />
  </div>
);

export default ExplorarComidas;
