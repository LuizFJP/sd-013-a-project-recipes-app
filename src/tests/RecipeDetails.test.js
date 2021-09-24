import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

const oneMeal = require('../../cypress/mocks/oneMeal');

describe('Página de detalhes das receitas', () => {
  const recipePhotoTestId = 'recipe-photo';
  const recipeTitleTestId = 'recipe-title';
  const shareBtnTestId = 'share-btn';
  const favoriteBtnTestId = 'favorite-btn';
  const recipeCategoryTestId = 'recipe-category';
  const ingredientNameMeasureTestId = '0-ingredient-name-and-measure';
  const instructionsTestId = 'instructions';
  const videoTestId = 'video';
  const recomendationCardTestId = '0-recomendation-card';
  const startRecipeBtnTestId = 'start-recipe-btn';

  describe('Tela de comidas ', () => {
    it('Deve possuir todos os atributos data-testid', async () => {
      const { history } = renderWithRouterAndRedux(<App />);

      history.push('/comidas/52771');

      const recipePhoto = await screen.findByTestId(recipePhotoTestId);
      const title = await screen.findByTestId(recipeTitleTestId);
      const shareBtn = await screen.findByTestId(shareBtnTestId);
      const favoritesBtn = await screen.findByTestId(favoriteBtnTestId);
      const recipesCategory = await screen.findByTestId(recipeCategoryTestId);
      const ingredients = await screen.findByTestId(ingredientNameMeasureTestId);
      const video = await screen.findByTestId(videoTestId);
      const instructions = await screen.findByTestId(instructionsTestId);
      const recomendations = await screen.findByTestId(recomendationCardTestId);
      const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

      expect(recipePhoto).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(shareBtn).toBeInTheDocument();
      expect(favoritesBtn).toBeInTheDocument();
      expect(recipesCategory).toBeInTheDocument();
      expect(ingredients).toBeInTheDocument();
      expect(instructions).toBeInTheDocument();
      expect(recomendations).toBeInTheDocument();
      expect(startRecipeBtn).toBeInTheDocument();
      expect(video).toBeInTheDocument();
    });
  });

  describe('Tela de bebidas ', () => {
    it('Deve possuir todos os atributos data-testid', async () => {
      const { history } = renderWithRouterAndRedux(<App />);

      history.push('/bebidas/178319');

      const recipePhoto = await screen.findByTestId(recipePhotoTestId);
      const title = await screen.findByTestId(recipeTitleTestId);
      const shareBtn = await screen.findByTestId(shareBtnTestId);
      const favoritesBtn = await screen.findByTestId(favoriteBtnTestId);
      const recipesCategory = await screen.findByTestId(recipeCategoryTestId);
      const ingredients = await screen.findByTestId(ingredientNameMeasureTestId);
      const instructions = await screen.findByTestId(instructionsTestId);
      const recomendations = await screen.findByTestId(recomendationCardTestId);
      const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

      expect(recipePhoto).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(shareBtn).toBeInTheDocument();
      expect(favoritesBtn).toBeInTheDocument();
      expect(recipesCategory).toBeInTheDocument();
      expect(ingredients).toBeInTheDocument();
      expect(instructions).toBeInTheDocument();
      expect(recomendations).toBeInTheDocument();
      expect(startRecipeBtn).toBeInTheDocument();
    });

    // it('Deve ter os ingredientes e medidas', async () => {
    //   //  https://www.leighhalliday.com/mock-fetch-jest
    //   global.fetch = jest.fn(() => Promise.resolve({
    //     json: () => Promise.resolve(oneMeal),
    //   }));
    //   const { history } = renderWithRouterAndRedux(<App />);

    //   history.push('/comidas/52771');

    //   const firstIngredient = await screen.findByTestId(ingredientNameMeasureTestId);

    //   expect(firstIngredient).toBeInTheDocument();
    //   expect(firstIngredient).toHaveTextContent('penne rigate 1 pound');

    // });
  });
});
