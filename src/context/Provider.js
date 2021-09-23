import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipesContext from './index';
import * as comidasApi from '../services/comidasApi';
import * as bebidasApi from '../services/bebidasApi';

function Provider({ children }) {
  const [inputText, setInputText] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const [data, setData] = useState([]);
  const history = useHistory();

  const condicionalFoodLenght = (results) => {
    if (results && results.length === 1) {
      history.push(`/comidas/${results[0].idMeal}`);
    }
    console.log(results, 'second');
  };

  const condicionalDrinkLenght = (results) => {
    if (results && results.length === 1) {
      history.push(`/bebidas/${results[0].idDrink}`);
    }
  };

  const condicionalMessageError = (results) => {
    if (!results) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const handleMealsApis = async () => {
    if (inputRadio === 'ingredient') {
      const results = await comidasApi.fetchFoodByIngredients(inputText);
      setData(results);

      condicionalMessageError(results);
      condicionalFoodLenght(results);
    }

    if (inputRadio === 'name') {
      const results = await comidasApi.fetchFoodByName(inputText);
      setData(results);

      condicionalMessageError(results);
      condicionalFoodLenght(results);
    }

    if (inputRadio === 'letter' && inputText.length === 1) {
      const results = await comidasApi.fetchFoodByLetter(inputText);
      setData(results);

      condicionalMessageError(results);
      condicionalFoodLenght(results);
    }

    if (inputRadio === 'letter' && inputText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const handleDrinksApis = async () => {
    if (inputRadio === 'ingredient') {
      const results = await bebidasApi.fetchDrinkByIngredients(inputText);
      setData(results);

      condicionalMessageError(results);
      condicionalDrinkLenght(results);
    }

    if (inputRadio === 'name') {
      const results = await bebidasApi.fetchDrinkByName(inputText);
      setData(results);
      console.log(results);

      condicionalMessageError(results);
      condicionalDrinkLenght(results);
    }

    if (inputRadio === 'letter' && inputText.length === 1) {
      const results = await bebidasApi.fetchDrinkByLetter(inputText);
      setData(results);

      condicionalMessageError(results);
      condicionalDrinkLenght(results);
    }

    if (inputRadio === 'letter' && inputText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const contextValue = {
    inputText,
    setInputText,
    inputRadio,
    setInputRadio,
    data,
    setData,
    handleMealsApis,
    handleDrinksApis,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
