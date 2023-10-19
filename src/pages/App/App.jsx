import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from '../../data';


export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={ <MoviesListPage movies={movies}/>} />
              <Route path="/actors" element={ <ActorListPage movieList={movies}/>} />
              <Route path="/movies/:movieName" element={ <MovieDetailPage movieList={movies}/>} />
            </Routes>
          </>
          :
          <LoginPage setUser={setUser} />
      }
    </main>
  );
}


