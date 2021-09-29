import React from 'react';
import { wait } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import DrinkExploreIngredients from '../pages/DrinkExploreIngredients';

const QTD = 12;

describe(`1 - Verifica elementos da tela de explorar ingredientes respeitando
  os atributos descritos no protótipo`, () => {
  test(`Verifica se tem os data-testids corretos para a tela de explorar
    bebidas por ingredientes`, async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <DrinkExploreIngredients
        title="Explorar Ingredientes de Bebidas"
        visible={ false }
      />,
    );

    for (let index = 0; index < QTD; index += 1) {
      expect(getByTestId(`${index}-ingredient-card`)).toBeInTheDocument();
      expect(getByTestId(`${index}-card-img`)).toBeInTheDocument();
      expect(getByTestId(`${index}-card-name`)).toBeInTheDocument();
    }

    await wait(() => expect(queryByTestId('12-ingredient-card')).toBeNull());
    await wait(() => expect(queryByTestId('12-card-img')).toBeNull());
    await wait(() => expect(queryByTestId('12-card-name')).toBeNull());
  });
});
