import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Context from '../contextAPI/Context';
import { Footer, HeaderSearch, MiniCard, CategoryButton } from '../components';

function Foods() {
  const { push } = useHistory();
  const { listItem, setListItem, baseUrlFood } = useContext(Context);

  const page = '/comidas';
  const MAX_INDEX = 12;

  useEffect(() => {
    const foodFetch = async () => {
      const request = await fetch(baseUrlFood);
      const data = await request.json();
      setListItem(data.meals.slice(0, MAX_INDEX));
    };
    foodFetch();
  }, [setListItem, baseUrlFood]);

  if (listItem.length === 0) return null;

  if (listItem.length === 1 && !baseUrlFood === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') {
    const id = listItem[0].idMeal;
    push(`${page}/${id}`);
  }
  return (
    <div>
      <HeaderSearch word="Comidas" />
      <CategoryButton />
      <div>
        {listItem.map((item, i) => (
          <MiniCard key={ i } args={ { i, ...item, page } } />))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
