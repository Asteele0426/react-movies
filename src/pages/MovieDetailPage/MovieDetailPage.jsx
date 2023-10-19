import { useParams } from "react-router-dom";
import './MovieDetail.css';
export default function MovieDetailPage({movieList}) {
  const{movieName}=useParams()
  const movie = movieList.find((movie)=>movie.title===movieName)
    return (
      <div>{movie.title}
      {movie.releaseDate}
      <img src ={movie.posterPath} /> 
      {movie.cast.map((actor)=>{
        return(
          <div>{actor}</div>
        )
      })}
      </div>
    );
  }