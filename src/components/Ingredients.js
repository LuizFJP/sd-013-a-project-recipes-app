import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Ingredients({ recipe, isMeal }) {
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const [
    checkedItems,
    setCheckedItems,
  ] = useState(JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {},
    meals: {},
  });

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const verifyMeal = (checked, indexIng, id, inProgressRecipes) => {
    if (checked) {
      const updatedMeals = {
        ...inProgressRecipes,
        meals: {
          ...inProgressRecipes.meals,
          [id]: inProgressRecipes.meals[id]
            ? [...inProgressRecipes.meals[id], indexIng] : [indexIng],
        },
      };

      setCheckedItems(updatedMeals);
    } else {
      const removedIngredient = inProgressRecipes.meals[id]
        .filter((ingredient) => ingredient !== indexIng);

      setCheckedItems({
        ...inProgressRecipes,
        meals: {
          ...inProgressRecipes.meals,
          [id]: removedIngredient,
        },
      });
    }
  };
  const verifyDrink = (checked, indexIng, id, inProgressRecipes) => {
    if (checked) {
      const updatedCocktails = {
        ...inProgressRecipes,
        cocktails: {
          ...inProgressRecipes.cocktails,
          [id]: inProgressRecipes.cocktails[id]
            ? [...inProgressRecipes.cocktails[id], indexIng] : [indexIng],
        },
      };
      setCheckedItems(updatedCocktails);
    } else {
      const removedIngredient = inProgressRecipes.cocktails[id]
        .filter((ingredient) => ingredient !== indexIng);
      setCheckedItems({
        ...inProgressRecipes,
        cocktails: {
          ...inProgressRecipes.cocktails,
          [id]: removedIngredient,
        },
      });
    }
  };

  const verifyChecked = (event, indexIng, id) => {
    if (isMeal) {
      verifyMeal(event.target.checked, indexIng, id, checkedItems);
    } else {
      verifyDrink(event.target.checked, indexIng, id, checkedItems);
    }
  };

  useEffect(() => {
    const getIngredients = () => {
      const entries = Object.entries(recipe);

      if (entries.length) {
        const ingredients = entries
          .filter(([chave, valor]) => chave.includes('strIngredient') && valor)
          .map(([, valor]) => (
            { name: valor }
          ));

        const measures = entries
          .filter(([chave, valor]) => chave.includes('strMeasure') && valor)
          .map(([, valor]) => (
            { measure: valor }
          ));

        const ingredientsAndMeasures = ingredients
          .map((ingredient, index) => ({ ...ingredient, ...measures[index] }));

        const checkedIngredients = ingredientsAndMeasures.map((ingredient, index) => {
          if (checkedItems.meals[recipe.idMeal]) {
            const isChecked = checkedItems.meals[recipe.idMeal]
              .some((item) => item === index);

            return {
              ...ingredient,
              checked: isChecked,
            };
          }
          if (checkedItems.cocktails[recipe.idDrink]) {
            const isChecked = checkedItems.cocktails[recipe.idDrink]
              .some((item) => item === index);

            return {
              ...ingredient,
              checked: isChecked,
            };
          }
          return ingredient;
        });

        setRecipeIngredients(checkedIngredients);

        // setRecipeIngredients(ingredientsAndMeasures);
      }
    };
    getIngredients();
  }, [checkedItems, recipe]);

  return (
    <ul>
      {recipeIngredients.map((ingredient, i) => (
        <label
          htmlFor={ `${i}-ingredient-step` }
          key={ `${ingredient.name} ${i}` }
          data-testid={ `${i}-ingredient-step` }
        >
          <input
            checked={ ingredient.checked }
            name={ `${i}-ingredient-step` }
            id={ `${i}-ingredient-step` }
            type="checkbox"
            onClick={ (event) => {
              verifyChecked(event, i, recipe.idMeal || recipe.idDrink);
            } }
          />
          {`${ingredient.name} ${ingredient.measure}`}
        </label>
      ))}
    </ul>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.shape(),
}.isRequired;

export default Ingredients;
