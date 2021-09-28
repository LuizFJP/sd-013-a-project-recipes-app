import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchRecipeById from '../services/fetchRecipeById';

function BebidasProgress({ match }) {
  const { recipeId } = match.params;

  const [drink, setDrink] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    const getDrink = async (id) => {
      const result = await fetchRecipeById(id, false);
      setDrink(result);
    };
    getDrink(recipeId);
    setIsLoading(false);
    // loadPage();
  }, [setDrink, recipeId]);

  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
    drink.strIngredient16,
    drink.strIngredient17,
    drink.strIngredient18,
    drink.strIngredient19,
    drink.strIngredient20,
  ];

  const handleCheckbox = ({ target }, index) => {
    if (target.checked === true) {
      target.parentElement.style.textDecorationLine = 'line-through';
      target.parentElement.style.textDecorationStyle = 'solid';
      setIngredientList([...ingredientList, target.value]);
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {
          [recipeId]: [...ingredientList, target.value],
        },
      }));
    } else if (target.checked === false) {
      target.parentElement.style.textDecorationLine = '';
      target.parentElement.style.textDecorationStyle = '';
      ingredientList.splice(index, 1);
      setIngredientList(ingredientList);
    }
  };

  /* const loadPage = () => {
    const listRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const checked = document.getElementsByTagName('input');
    const teste = Object.keys(listRecipe.cocktails);

    if (Number(teste) === Number(recipeId)) {
      console.log('teste');
      checked.forEach((check, index) => {
        console.log(check);
        if (checked.value === Object.values(listRecipe.cocktails)[index]) {
          checked.checked = true;
        }
      });
    }
    // console.log(teste);
    // console.log(Object.keys(listRecipe.cocktails))
    // console.log(Object.values(listRecipe.cocktails)[0])
  }; */

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>
        Detalhes da Receita de Comida
        {recipeId}
      </h1>
      <h2 data-testid="recipe-title">{drink.strDrink}</h2>
      <h3 data-testid="recipe-category">{drink.strCategory}</h3>
      <img
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        data-testid="recipe-photo"
      />
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">S2</button>

      <h4>Ingredientes</h4>
      <ul>
        {ingredients.filter((ingredient) => typeof ingredient === 'string'
        && ingredient !== '')
          .map((ingredient, index) => (
            <div
              key={ ingredient }
            >
              <label
                htmlFor={ index }
                key={ ingredient }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  value={ ingredient }
                  id={ index }
                  type="checkbox"
                  onClick={ ({ target }) => handleCheckbox({ target }, index) }
                />
                {ingredient}
              </label>
            </div>))}
      </ul>

      <h4>Instruções</h4>
      <p data-testid="instructions">{drink.strInstructions}</p>

      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>

    </div>
  );
}

BebidasProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BebidasProgress;
