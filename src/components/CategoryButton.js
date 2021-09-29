import React, { useEffect, useState } from 'react';

// Magic number que o lint vai pedir.
const MAX_LENGHT = 5;

function CategoryButton() {
  // Aqui é o estado do componente.
  const [state, setState] = useState([]);
  // Aqui é o equivalente ao componenteDidMount.
  useEffect(() => {
    // Quando estamos utilizando o useEffect, precisamos fazer o async/await dentro da função e não nela.
    const fetchApi = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const data = await request.json();
      // SetState atualiza o estado do componente (state).
      setState(data.meals.slice(0, MAX_LENGHT));
      return data;
    };
    // O fetchApi é uma função que busca o conteudo da URL, faz um flitro no contéudo buscado (const data).
    fetchApi();
  }, []); // O parâmetro "[]" é o default para que o código não entre em loop.

  return (
    <div>
      <button type="button">
        All
      </button>
      {state.map((item, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${item.strCategory}-category-filter` }
        >
          {item.strCategory}
        </button>))}
    </div>
  );
}

export default CategoryButton;
