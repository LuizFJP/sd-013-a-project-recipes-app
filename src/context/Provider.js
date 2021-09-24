import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import fetchMeals from '../services/fetchMeals';
import fetchMealsCategories from '../services/fetchMealsCategories';
import fetchDrinks from '../services/fetchDrinks';
import fetchDrinksCategories from '../services/fetchDrinksCategories';

function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const [meals, setMeals] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  const [drinks, setDrinks] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  const [toggleOn, setToggleOn] = useState('');

  useEffect(() => {
    const getMeals = async () => {
      const results = await fetchMeals();
      setMeals(results);
      setFilteredMeals(results);
    };
    getMeals();

    const getMealsCategories = async () => {
      const results = await fetchMealsCategories();
      setMealsCategories(results);
    };
    getMealsCategories();

    const getDrinks = async () => {
      const results = await fetchDrinks();
      setDrinks(results);
      setFilteredDrinks(results);
    };
    getDrinks();

    const getDrinksCategories = async () => {
      const results = await fetchDrinksCategories();
      setDrinksCategories(results);
    };
    getDrinksCategories();
  }, []);

  const context = {
    meals,
    setMeals,
    mealsCategories,
    setMealsCategories,
    filteredMeals,
    setFilteredMeals,

    drinks,
    drinksCategories,
    setDrinks,
    setDrinksCategories,
    filteredDrinks,
    setFilteredDrinks,

    toggleOn,
    setToggleOn,
    recipes,
    setRecipes,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
