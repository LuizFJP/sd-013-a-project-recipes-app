// ===========================
// Api's para as comidas
// ===========================

export const queryIngredient = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const request = await fetch(url);
  const results = request.json();
  return results;
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

// ===========================
// Api's para as bebidas
// ===========================

// export const queryIngredientDrink = async (ingredient) => {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
//   const request = await fetch(url);
//   const results = request.json();
//   return results;
// };

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

export const queryIngredientDrink = async (ingredient) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const request = await fetch(url);
    return request.json();
  } catch (error) {
    console.log(error.message);
  }
};
