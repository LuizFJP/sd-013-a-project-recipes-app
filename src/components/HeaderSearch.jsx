import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../context';

function HeaderSearch({ tela }) {
  const { setRecipes } = useContext(Context);

  const [radio, setRadio] = useState({
    input: '',
    search: '',
  });
  const history = useHistory();

  const handleChange = ({ target: { value, name } }) => {
    setRadio({
      ...radio,
      [name]: value,
    });
  };

  const fetchSearch = async (page, filter, input) => {
    let API = '';
    let link = 'themealdb';
    if (page === 'Bebidas') {
      link = 'thecocktaildb';
    }
    switch (filter) {
    case 'ingrediente':
      API = `https://www.${link}.com/api/json/v1/1/filter.php?i=${input}`;
      break;
    case 'nome':
      API = `https://www.${link}.com/api/json/v1/1/search.php?s=${input}`;
      break;
    case 'primeira-letra':
      if (input.length > 1) {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      API = `https://www.${link}.com/api/json/v1/1/search.php?f=${input}`;
      break;
    default:
      API = '';
    }
    const data = await fetch(API);
    const json = await data.json();
    setRecipes(json);
    const type = (page === 'Bebidas') ? json.drinks : json.meals;
    const id = (page === 'Bebidas' ? json.drinks[0].idDrink : json.meals[0].idMeal);
    if (type.length === 1) {
      history.push(`/${page.toLowerCase()}/${id}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        name="input"
        onChange={ handleChange }
      />
      <label htmlFor="radio-ingredient">
        <input
          id="radio-ingredient"
          data-testid="ingredient-search-radio"
          type="radio"
          name="search"
          value="ingrediente"
          onChange={ handleChange }
        />
        Ingrediente
      </label>
      <label htmlFor="radio-name">
        <input
          id="radio-name"
          type="radio"
          data-testid="name-search-radio"
          name="search"
          value="nome"
          onChange={ handleChange }
        />
        Nome
      </label>
      <label htmlFor="radio-first">
        <input
          id="radio-first"
          type="radio"
          data-testid="first-letter-search-radio"
          name="search"
          value="primeira-letra"
          onChange={ handleChange }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => fetchSearch(tela, radio.search, radio.input) }
      >
        Busca
      </button>
    </div>
  );
}

HeaderSearch.propTypes = {
  tela: PropTypes.string,
}.isRequired;

export default HeaderSearch;
