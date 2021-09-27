import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Context from '../context/Context';
import { getDrinks, getCategories } from '../services/Api';

function Drinks() {
  const { drinks, setDrinksValue } = useContext(Context);
  const [categories, setCategories] = useState();
  const [categorie, setCategorie] = useState('All');
  const MAX_DRINK_CARDS = 12;
  const MAX_CATEGORIS = 5;

  useEffect(() => {
    const fetchDrinks = async () => {
      setDrinksValue(await getDrinks(categorie));
      setCategories(await getCategories('drinks'));
    };
    fetchDrinks();
  }, [categorie]);

  const handleFilter = (categorieName) => {
    if (categorieName === categorie) {
      setCategorie('All');
    } else {
      setCategorie(categorieName);
    }
  };

  if (drinks === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header title="Bebidas" withSearchButton />
      <h1>Lista de bebidas</h1>
      <section className="filter__buttons">
        <button
          type="button"
          name="All"
          data-testid="All-category-filter"
          onClick={ () => handleFilter('All') }
        >
          All
        </button>
        {categories && categories.slice(0, MAX_CATEGORIS).map((button, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${button.strCategory}-category-filter` }
            onClick={ () => handleFilter(button.strCategory) }
          >
            { button.strCategory }
          </button>
        ))}
      </section>
      {drinks && drinks.slice(0, MAX_DRINK_CARDS).map((drink, index) => (
        <Card
          key={ drink.strDrink }
          name={ drink.strDrink }
          image={ drink.strDrinkThumb }
          index={ index }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Drinks;
