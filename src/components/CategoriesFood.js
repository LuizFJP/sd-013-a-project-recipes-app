import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';
import '../styles/CategoriesFood.css';

function CategoriesFood() {
  // Importa do context o foodCategory para pegar as categorias de Comidas, o setIsDrinkOrMealLoading para indicar que as Comidas estão carregando e o setMealsOrDrinks para setar o novo array de Comidas
  const {
    foodCategory,
    directRequestFood,
    setIsDrinkOrMealLoading,
    setMealsOrDrinks,
    setCameFromIngredient,
  } = useContext(RecipeContext);

  // Pegar no máximo 5 categorias e colocar na tela
  const MIN_CATEG = 5;

  // Fetch que faz a busca na API usando o filtro conforme value(que é o botão clicado)
  const fetchCategory = async (value) => {
    setIsDrinkOrMealLoading(true);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
    const result = await response.json();
    setMealsOrDrinks(result.meals);
    setIsDrinkOrMealLoading(false);
  };

  const handleClick = () => {
    setCameFromIngredient(false);
    directRequestFood();
  };

  return (
    <div className="categorias">
      <button
        id="btn"
        type="button"
        onClick={ handleClick }
        data-testid="All-category-filter"
      >
        All
      </button>
      {/* Percorre as categorias do Food pegando até no máximo 5 categorias
       conforme MIN_CATEG */}
      { foodCategory.map((elem, index) => {
        if (index < MIN_CATEG) {
          return (
            <button
            id="btn"
              data-testid={ `${elem.strCategory}-category-filter` }
              type="button"
              value={ elem.strCategory }
              // Ao clicar no botão, será acionado a função fetchFilterCategory passando a ela o value como parametro, que é o botão clicado
              onClick={ ({ target }) => {
                target.firstChild.checked = !target.firstChild.checked;
                return (
                  target.firstChild.checked
                    ? fetchCategory(target.value) : handleClick);
              } }
              key={ elem.strCategory }
            >
              <input type="checkbox" style={ { display: 'none' } } />
              {elem.strCategory}
            </button>
          );
        }
        return '';
      })}
    </div>
  );
}

export default CategoriesFood;
