const FetchAPI = async (currentPage, buttonState, letter, searchState) => {
  const URL = `https://www.${currentPage}.com/api/json/v1/1/${buttonState}.php?${letter}=${searchState}`;
  const fetchApi = await fetch(URL);
  const data = await fetchApi.json();
  if (currentPage === 'themealdb') return data.meals;
  if (currentPage === 'thecocktaildb') return data.drinks;
};
export default FetchAPI;
