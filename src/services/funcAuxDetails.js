import copy from 'clipboard-copy';
import { foodAPIRequest, cocktailsAPIRequest } from './APIrequest';

export const getAPIdata = async (id, setfoodDetail) => {
  const APIRequest = await foodAPIRequest('lookup', `i=${id}`);
  setfoodDetail(...APIRequest);
};

export const btnContinuar = (id, setBtnState) => {
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ meals: {}, cocktails: {} }));
  }
  const test = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const chaves = Object.keys(test.meals).some((chave) => chave === id);

  if (chaves) {
    setBtnState('Continuar Receita');
  }
};
export const btnFavoritar = (id) => {
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([]));
  }
  const testFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const chavesFav = testFav.some((chave) => chave.id === id);
  return chavesFav;
};

export const ingredientMeasures = (obj, tipo) => {
  const keysOfApi = Object.keys(obj);
  if (tipo === 'medida') {
    const measurementKeys = keysOfApi.filter((chave) => chave.includes('strMeasure'))
      .map((measure) => obj[measure])
      .filter((measure) => measure !== ' ' && measure !== null && measure !== '');
    return measurementKeys;
  }
  if (tipo === 'ingredientes') {
    const ingredientsKeys = keysOfApi.filter((chave) => chave.includes('strIngredient'));
    const ingredientsValues = ingredientsKeys
      .map((ingredient) => obj[ingredient])
      .filter((ingred) => ingred !== '' && ingred !== null && ingred !== '');
    return ingredientsValues;
  }
};

export const changeLocalRecipe = (id, tipo1, tipo2) => {
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ [tipo1]: { [id]: [] }, [tipo2]: {} }));
  }
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  localStorage.setItem('inProgressRecipes', JSON
    .stringify({ ...recipes, [tipo1]: { ...recipes[tipo1], [id]: [] } }));
};

export const changeLocalFavorite = (favInfo, btnFavorite, setBtnFavorite, id) => {
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favInfo]));
  }

  const favs = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const unFav = favs.filter((element) => element.id !== id);

  if (btnFavorite === 'isNotFavorite') {
    copy('isFavorite');
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...favs, favInfo]));
  } else {
    copy('isNotFavorite');
    localStorage.setItem('favoriteRecipes', JSON.stringify(unFav));
  }
  navigator.clipboard.readText().then(
    (clipText) => setBtnFavorite(clipText),
  );
};
