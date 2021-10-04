// ===========================
// Api's para as comidas
// ===========================

export const queryIngredientV = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryIngredient = (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const results = { ...data };
      return results;
    })
    .catch((err) => console.log('tratamento do erro', err));
};

export const queryName = async (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryFirstLetter = async (firstLetter) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryDefaultMeals = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const categoriesMeals = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const fetchCategoryMeal = async (strCategory) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryRecipeByID = async (idDaReceita) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDaReceita}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

// ===========================
// Api's para as bebidas
// ===========================

export const queryIngredientDrink = async (ingredient) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const request = await fetch(url);
    const results = request.json();
    return results;
  } catch (error) {
    global.alert('Deu ruim', error);
  }
};

export const queryNameDrink = async (name) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryFirstLetterDrink = async (firstLetter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryDefaultDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const categoriesDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const fetchCategoryDrink = async (strCategory) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const queryDrinkByID = async (idDaReceita) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDaReceita}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const getDrinkSurprise = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const request = await fetch(url);
  const results = request.json();
  return results;
};

export const getMealSurprise = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const request = await fetch(url);
  const results = request.json()
    .then();
  return results;
};
