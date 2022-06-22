import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    
    const { id } = useParams();
    const [ MovieDetails, setMovieDetails ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
    

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6d30ed6efefc5a078c3a1471cf980026&language=en-US`)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .then(data => {
            
            setMovieDetails(data)
            setIsLoading(false)
            
        })
        .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
        });
    
    }, [id])
 
  
  
  
    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="...Loading" />
                
            
            
        }
        if(MovieDetails) {
            //TODO: what if image is missing
            const posterPath = `https://image.tmdb.org/t/p/original${MovieDetails.poster_path}`
            
            const backdropUrl = `https://image.tmdb.org/t/p/original${MovieDetails.backdrop_path}`
            
          return (
              <div className="bg-dark fill">
              <Hero text={MovieDetails.original_title} tagline={MovieDetails.tagline} backdrop={backdropUrl} />
              <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterPath} 
                        alt={MovieDetails.original_title} className="img-fluid shadow rounded"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs=';
                        }}
                        />
                        
                    </div>
                    <div className="col-md-9">
                        <h2>{MovieDetails.original_title}</h2>
                        <h5>Release date: {MovieDetails.release_date}</h5>
                        <p className="lead">
                            {MovieDetails.overview}
                        </p>
                    </div>
                </div>
              </div>
              </div>
          )
          

        }
    }

    
    return renderMovieDetails()
};
export default MovieView;