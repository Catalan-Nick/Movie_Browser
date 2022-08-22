import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
    
    const { id } = useParams();
    const [ MovieDetails, setMovieDetails ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/971656?api_key=6d30ed6efefc5a078c3a1471cf980026&language=en-US`)
            .then(response => response.json())
            .then(data => {
                
                    
                    setMovieDetails(data)
                    setIsLoading(false)
                
        })
    }, [id])
    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="...Loading" />
                
            
            
        }
        if(MovieDetails) {
            //TODO: what if image is missing
            const posterPath = `https://image.tmdb.org/t/p/original${MovieDetails.poster_path}`
            
            const backdropUrl = `https://image.tmdb.org/t/p/original${MovieDetails.backdrop_path}`
            const message404 = `Error ${MovieDetails.original_title} Page Not Found`
            
          return (
              <div className='bg-dark fill'>
              <Hero text={message404} backdrop={backdropUrl} />
              <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterPath} alt={MovieDetails.original_title} className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-md-9">
                        <h2>{MovieDetails.original_title}</h2>
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
}
export default NotFoundPage