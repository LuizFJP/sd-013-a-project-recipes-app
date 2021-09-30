import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../contextAPI/Context';

// Magic number que o lint vai pedir.
const MAX_LENGHT = 5;

function CategoryButton() {
  // Aqui é o estado do componente.
  const [state, setState] = useState([]);
  const [button, setbutton] = useState('');
  const { setBaseUrlFood, setBaseUrlDrink } = useContext(Context);
  const page = useHistory().location.pathname;

  let baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  if (page === '/comidas') {
    baseUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  }

  // Aqui é o equivalente ao componenteDidMount.
  useEffect(() => {
    // Quando estamos utilizando o useEffect, precisamos fazer o async/await dentro da função e não nela.
    const fetchApi = async () => {
      const request = await fetch(baseUrl);
      const data = await request.json();
      if (page === '/comidas') {
        // SetState atualiza o estado do componente (state).
        setState(data.meals.slice(0, MAX_LENGHT));
      } else {
        setState(data.drinks.slice(0, MAX_LENGHT));
      }
      // SetState atualiza o estado do componente (state).
      return data;
    };
    // O fetchApi é uma função que busca o conteudo da URL, faz um flitro no contéudo buscado (const data).
    fetchApi();
  }, [baseUrl, page]); // O parâmetro "[]" é o default para que o código não entre em loop.

  const onClick = (event) => {
    // botões feitos; clicar no botão deve fazer a req da categoria.
    if (page === '/comidas') {
      const base = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
      const category = event.target.innerText;
      if (button === category || category === 'All') {
        setBaseUrlFood('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setbutton('All');
      } else {
        setBaseUrlFood(base + category);
        setbutton(category);
      }
    }
    if (page === '/bebidas') {
      const base = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
      const category = event.target.innerText;
      if (button === category || category === 'All') {
        setbutton('All');
        setBaseUrlDrink('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      } else {
        setBaseUrlDrink(base + category);
        setbutton(category);
      }
    }
  };

  return (
    <div>
      <button type="button" onClick={ onClick } data-testid="All-category-filter">
        All
      </button>
      {state.map((item, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${item.strCategory}-category-filter` }
          onClick={ onClick }
        >
          {item.strCategory}
        </button>))}
    </div>
  );
}

export default CategoryButton;
