import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../Context/Context';

function Foods() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const { setCurrentPage } = useContext(Context);

  useEffect(() => {
    async function fetchFoods() {
      const { meals } = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      ).then((data) => data.json());

      const magicNumber = 12;
      const SplitArray = meals.splice(0, magicNumber);

      setFoods(SplitArray);
    }
    fetchFoods();
    setCurrentPage('Comidas');
  }, [setCurrentPage]);

  useEffect(() => {
    async function fetchCategories() {
      const { meals } = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
      ).then((data) => data.json());

      const magicNumber = 5;
      const SplitArray = meals.splice(0, magicNumber);

      setCategories(SplitArray);
    }
    fetchCategories();
  }, []);

  return (
    <div className="foods">
      <Header />
      <ul>
        {categories.map((category) => (
          <button
            type="button"
            key={ category.strCategory }
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {category.strCategory}
          </button>
        ))}
      </ul>
      <ul>
        {foods.map((food, idx) => (
          <li data-testid={ `${idx}-recipe-card` } key={ food.idMeal }>
            <img
              src={ food.strMealThumb }
              alt={ `Comida: ${food.strMeal}` }
              width="150px"
              data-testid={ `${idx}-card-img` }
            />
            <p data-testid={ `${idx}-card-name` }>{food.strMeal}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Foods;
