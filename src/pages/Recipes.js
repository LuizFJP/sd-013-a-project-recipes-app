import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import recipesContext from '../context/recipesContext';

function Recipes() {
  const { searchBar: { query, endpoint } } = useContext(recipesContext);

  useFetch(query, endpoint, true);

  return (
    <div className="meals container">
      <Header title="Comidas" />
      <section />
    </div>
  );
}

export default Recipes;
