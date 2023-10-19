import MovieCard from "./MovieCard";
import './MoviesList.css'
import { Link } from "react-router-dom";

export default function MoviesListPage({movies}) {
    return (
      <div className='container'>
        {movies.map((movie)=>{
          return(
            <Link to={`/movies/${movie.title}`}> <MovieCard movie={movie} /> </Link>
          )
        })}
      </div>
    );
  }