import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipeCard from '../Components/RecipeCard';
import Buttons from '../Components/Buttons';
import Context from '../ContextAPI/Context';

export default function Foods() {
  const pageTitle = {
    pageName: 'Comidas',
    setIcon: true,
  };

  const history = useHistory();

  const { searchData, loading, pathnameCheck, fetchAPI } = useContext(Context);

  const DOZE = 12;

  const { pathname } = useLocation();

  // const API = () => (fetchAPI(pathnameCheck()));
  useEffect(() => {
    // Requisição inicial para renderizar cards ao carregar a página.
    // const { pathname } = useLocation();
    fetchAPI(pathnameCheck());
  }, []);

  return (
    <div>
      <Header value={ pageTitle } />
      <h1>Foods</h1>
      <Buttons />

      {loading && searchData.length === 1
        ? history.push(`/comidas/${searchData[0].idMeal}`)
        : searchData.map((recipe, index) => (
          index < DOZE && <RecipeCard
            name={ recipe.strMeal }
            img={ recipe.strMealThumb }
            key={ index }
            index={ index }
            id={ recipe.idMeal }
            pathName={ pathname }
          />))}
      <Footer />
    </div>
  );
}
