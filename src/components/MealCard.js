import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MealCard({ recipe, index }) {
  function details(id) {
    const toDetails = {
      pathname: `/comidas/${id}`,
      id,
    };
    return toDetails;
  }
  console.log(`${index}-recipe-card`);
  return (
    <div data-test-id={ `${index}-recipe-card` }>
      <Link to={ () => details(recipe.idMeal) }>
        <button type="button" data-test-id={ `${index}-recipe-card` }>
          <img
            src={ recipe.strMealThumb }
            alt="Recipe thumbnail"
            width="150"
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>
            { recipe.strMeal }
          </p>
        </button>
      </Link>
    </div>
  );
}

MealCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default MealCard;
