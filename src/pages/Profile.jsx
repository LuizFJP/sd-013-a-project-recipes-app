import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  // const [email, setEmail] = useState();
  const history = useHistory();
  // console.log(email);

  // useEffect(() => {
  //   const login = JSON.parse(localStorage.getItem('user'));
  //   setEmail(login.email);
  // }, []);

  const Sair = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <Footer />

      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ Sair }
      >
        Sair
      </button>
    </div>

  );
}

export default Profile;
