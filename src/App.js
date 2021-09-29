import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';
import Perfil from './components/PerfilScreen';
import Comidas from './pages/comidas';
import Bebidas from './pages/bebidas';
import ExplorePage from './pages/explorePage';
import ExploreFoodPage from './pages/exploreFoodPage';
import ExploreDrinkPage from './pages/exploreDrinkPage';
import DrinksDetails from './pages/recipeDetail/drinksDetails';
import MealDetails from './pages/recipeDetail/mealDetails';
import FoodIngredients from './pages/foodIngredients';
import ExploreFoodArea from './pages/exploreFoodArea';
import NotFoundPage from './pages/notFoundPage';
import FavRecipes from './pages/favRecipes';
import InProgress from './pages/inProgress/inProgress';
import DrinkIngredients from './pages/drinkIngredients';

function App() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/comidas/:idDaReceita/in-progress" component={ InProgress } />
      <Route path="/comidas/:id" component={ MealDetails } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/bebidas/:id" component={ DrinksDetails } />
      <Route exact path="/explorar" component={ ExplorePage } />
      <Route exact path="/explorar/comidas" component={ ExploreFoodPage } />
      <Route exact path="/explorar/comidas/ingredientes" component={ FoodIngredients } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ DrinkIngredients } />
      <Route exact path="/explorar/comidas/area" component={ ExploreFoodArea } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinkPage } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/receitas-favoritas" component={ FavRecipes } />
      <Route component={ NotFoundPage } />
      {/* <Route exact path="/bebidas/:id-da-receita/in-progress" component={} />
      <Route exact path="/receitas-feitas" component={} /> */}
    </Switch>
  );
}

export default App;
