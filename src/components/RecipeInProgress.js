import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackFavoriteIcon from '../images/blackHeartIcon.svg';
import whiteFavoriteIcon from '../images/whiteHeartIcon.svg';
import Ingredients from './Ingredients';
import CopyLinkModal from './CopyLinkModal';
import formatRecipeToFavorite from '../utils/formatRecipeToFavorite';

function RecipeInProgress({ recipe, isMeal }) {
  const [allChecked, setAllChecked] = useState(false);
  const [shouldDisplayMessage, setShouldDisplayMessage] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [
    favoriteRecipes,
    setFavoriteRecipes,
  ] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);

  useEffect(() => {
    const favorite = favoriteRecipes
      .some((favoriteRecipe) => favoriteRecipe.id === recipe.idMeal
          || favoriteRecipe.id === recipe.idDrink);

    setIsFavorite(favorite);

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes, recipe]);

  const history = useHistory();

  const isAllChecked = (ingredients) => {
    const isChecked = ingredients.every((ingredient) => ingredient.checked);
    setAllChecked(isChecked);
  };

  const goToRecipesDone = () => history.push('/receitas-feitas');

  const handleCopy = () => {
    const routeWithoutInProgress = history.location.pathname.replace('/in-progress', '');
    copy(`http://localhost:3000${routeWithoutInProgress}`);
    setShouldDisplayMessage(true);
  };

  const saveFavoriteRecipe = (favoriteRecipe) => {
    const favorite = formatRecipeToFavorite(favoriteRecipe, isMeal);

    setFavoriteRecipes([
      ...favoriteRecipes,
      favorite,
    ]);
  };

  const removeFavoriteRecipe = (currentRecipe) => {
    favoriteRecipes
      .filter((favoriteRecipe) => favoriteRecipe.id !== currentRecipe.idMeal
        || favoriteRecipe.id !== currentRecipe.idDrink);
  };

  const toggle = (favorite) => {
    if (favorite) {
      removeFavoriteRecipe(recipe);
      setIsFavorite(false);
    } else {
      saveFavoriteRecipe(recipe);
      setIsFavorite(true);
    }
  };

  return (
    <div>

      <img
        data-testid="recipe-photo"
        src={ isMeal ? recipe.strMealThumb : recipe.strDrinkThumb }
        alt={ isMeal ? 'foto da comida' : 'foto do drink' }
        style={ { width: '100vw' } }
      />

      <h2 data-testid="recipe-title">{isMeal ? recipe.strMeal : recipe.strDrink}</h2>

      <input
        type="image"
        src={ shareIcon }
        alt="Link copiado!"
        data-testid="share-btn"
        onClick={ handleCopy }
      />

      { shouldDisplayMessage
        && <CopyLinkModal
          setShouldDisplayMessage={ setShouldDisplayMessage }
        /> }

      <input
        type="image"
        src={ isFavorite ? blackFavoriteIcon : whiteFavoriteIcon }
        alt="favoritar receita"
        data-testid="favorite-btn"
        onClick={ () => toggle(isFavorite) }
      />

      <h3
        data-testid="recipe-category"
      >
        {`${recipe.strCategory} ${recipe.strAlcoholic}`}
      </h3>

      <Ingredients recipe={ recipe } isMeal={ isMeal } isAllChecked={ isAllChecked } />

      <p data-testid="instructions">{recipe.strInstructions}</p>

      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ goToRecipesDone }
        disabled={ !allChecked }
      >
        Finalizar receita
      </button>

    </div>
  );
}

RecipeInProgress.propTypes = {
  recipe: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strVideo: PropTypes.string,
    strIngredient: PropTypes.string,
    strAlcoholic: PropTypes.string,
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
  isMeal: PropTypes.bool.isRequired,
};

export default RecipeInProgress;
