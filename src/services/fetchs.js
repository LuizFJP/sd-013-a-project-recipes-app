// Se o radio selecionado for Ingrediente
const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export const fetchByIngredient = async (type, ingredient) => {
  const urlIngrediente = `https://www.${type}.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const res = await fetch(urlIngrediente);
  const json = await res.json();
  if (json.meals === null || json.drinks === null) {
    global.alert(message);
    return [];
  }
  return (type === 'themealdb' ? json.meals : json.drinks);
};

// se o radio selecionado for name
export const fetchByName = async (type, name) => {
  const urlName = `https://www.${type}.com/api/json/v1/1/search.php?s=${name}`;
  const res = await fetch(urlName);
  const json = await res.json();
  if (json.meals === null || json.drinks === null) {
    global.alert(message);
    return [];
  }
  return (type === 'themealdb' ? json.meals : json.drinks);
};

// se o radio selecionado for apenas a primeira letra
export const fetchByLetter = async (type, firstLetter) => {
  const urlFirstLetter = `https://www.${type}.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const res = await fetch(urlFirstLetter);
  const json = await res.json();
  if (json.meals === null || json.drinks === null) {
    global.alert(message);
    return [];
  }
  return (type === 'themealdb' ? json.meals : json.drinks);
};

export const fetchByCategoryFood = async (category = 'list', filter = 'list') => {
  const URL = `https://www.themealdb.com/api/json/v1/1/${filter}.php?c=${category}`;
  const res = await fetch(URL);
  const json = await res.json();
  return json.meals;
};

export const fetchByCategoryDrink = async (category = 'list', filter = 'list') => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/${filter}.php?c=${category}`;
  const res = await fetch(URL);
  const json = await res.json();
  return json.drinks;
};

/* export const fetchAllCategories = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const res = await fetch(URL);
  const json = await res.json();
  return json.categories;
}; */
