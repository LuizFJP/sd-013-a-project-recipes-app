import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import MyContext from '../context/myContext';
import Footer from '../components/Footer';

function Drinks() {
  const { dataDrinks, fetchDataDrinks, arrayFiltered } = useContext(MyContext);
  const { drinks } = dataDrinks;

  useEffect(() => {
    const fetchData = async () => fetchDataDrinks();
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderOne = () => {
    const { idDrink } = drinks[0];
    return <Redirect to={ `/bebidas/${idDrink}` } />;
  };

  const renderAll = () => {
    if (drinks) {
      return arrayFiltered(drinks).map((item, index) => {
        const { strDrink, strDrinkThumb, idDrink } = item;
        return (
          <Link to={ `/bebidas/${idDrink}` } key={ index }>
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
              <img
                src={ strDrinkThumb }
                alt={ strDrink }
                style={ { width: '250px' } }
                data-testid={ `${index}-card-img` }
              />
            </div>
          </Link>
        );
      });
    }
  };

  return (
    <div>
      <Header title="Bebidas" searchIcone />
      {drinks && drinks.length === 1 ? renderOne() : renderAll()}
      <Footer />
    </div>
  );
}

export default Drinks;
