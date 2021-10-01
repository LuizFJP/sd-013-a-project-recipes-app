import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import FilterRecipes from '../components/FilterRecipes';
import MasterCard from '../components/MasterCard';
import { getFavRecipes } from '../services/localStorageFunctions';

const Main = styled.main`
  margin-top: 68px;
`;

const FavoritedRecipes = () => {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]);
  const [disableFilters, setDisableFilters] = useState();
  const [favFoodRecipes, setFavFoodRecipes] = useState([]);
  const [favDrinkRecipes, setFavDrinkecipes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    getFavRecipes(
      setFavoritedRecipes, setFavFoodRecipes, setFavDrinkecipes, setDisableFilters,
    );
  }, []);

  const handleFilter = ({ target: { name } }) => {
    switch (name) {
    case 'All':
      setSelectedFilter('All');
      break;
    case 'Foods':
      setSelectedFilter('Foods');
      break;
    case 'Drinks':
      setSelectedFilter('Drinks');
      break;
    default:
      setSelectedFilter('All');
      break;
    }
  };

  function renderFavRecipes() {
    if (selectedFilter === 'All') {
      return (
        favoritedRecipes.map((favRecipe, idx) => (
          <MasterCard
            cardType="favorited"
            index={ idx }
            src={ favRecipe.image }
            key={ idx }
            id={ favRecipe.id }
            type={ favRecipe.type }
            area={ favRecipe.area }
            category={ favRecipe.category }
            title={ favRecipe.name }
            favOrDone="true"
            alcoholicOrNot={ favRecipe.alcoholicOrNot }
            recipe={ favRecipe }
          />
        ))
      );
    }
    if (selectedFilter === 'Foods') {
      return (
        favFoodRecipes.map((favFood, idx) => (
          <MasterCard
            cardType="favorited"
            index={ idx }
            src={ favFood.image }
            id={ favFood.id }
            key={ idx }
            type={ favFood.type }
            area={ favFood.area }
            category={ favFood.category }
            title={ favFood.name }
            favOrDone="true"
            alcoholicOrNot={ favFood.alcoholicOrNot }
            recipe={ favFood }
          />
        ))
      );
    }
    if (selectedFilter === 'Drinks') {
      return (
        favDrinkRecipes.map((favDrink, idx) => (
          <MasterCard
            cardType="favorited"
            index={ idx }
            src={ favDrink.image }
            id={ favDrink.id }
            key={ idx }
            type={ favDrink.type }
            area={ favDrink.area }
            category={ favDrink.category }
            title={ favDrink.name }
            favOrDone="true"
            alcoholicOrNot={ favDrink.alcoholicOrNot }
            recipe={ favDrink }
          />
        ))
      );
    }
  }
  return (
    <Main>
      <Header title="Receitas Favoritas" />
      { !disableFilters
        && <FilterRecipes pageTitle="both" handleFilter={ handleFilter } /> }
      { disableFilters && <p>Parece que você não tem nenhuma receita favorita</p> }
      { renderFavRecipes }
    </Main>
  );
};

export default FavoritedRecipes;
