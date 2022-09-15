import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const NowPlaying = () => {
   const [inTheater, setInTheater ] = useState([]);
   
   useEffect(() => {
    
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=6d30ed6efefc5a078c3a1471cf980026&language=en-US&page=1`) 
      .then(response => response.json())
      .then(data => {
        setInTheater(data.results)
      })
    
  }, [])
 
  return (
        <div className=" d-flex overflow-hidden carousel-control-next" >
        
        {inTheater.map(({ title, release_date, poster_path,id}) => (
        <div key={id} className="col-lg-3 col-md-3 col-sm-6 my-4 animate">
        <div  className="card bg-light border-primary  mx-4 ">
            <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                className="card-img-top"
                alt={title}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs=';
                  }}
                />
            <div className="card-body">
                <p className="card-title text-black">{title}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Show details</Link>
            </div>
        </div>
    </div>
      ))}
        </div>
    )
}
export default NowPlaying