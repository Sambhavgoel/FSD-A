import './MovieList.css'
import movies from "./movies"

export default function MovieList() {
  return (
    <div className='movie-list'>
        {movies.map((movie)=>(
            <div key={movie.id} className='movie-card'>
                <img src={movie.image} className='movie-img'/>
                <div className="content">
                    <h1>Title : {movie.title}</h1>
                    <h2>language : {movie.language}</h2>
                    <h2>Cost : {movie.cost}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}
