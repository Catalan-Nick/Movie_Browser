import Hero from "./Hero"
import { Link } from "react-router-dom"

//TMDB Api key: 6d30ed6efefc5a078c3a1471cf980026

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    
    const detailUrl = `/movies/${movie.id}`;
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 my-4">
            <div className="card bg-light border-primary">
                <img
                    src={posterUrl }
                    className="card-img-top"
                    alt={movie.original_title}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs=';
                      }}
                    />
                <div className="card-body">
                    <h5 className="card-title text-black">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}



const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
         return <MovieCard movie={obj} key={i} />
    });

    return(
        <div className="bg-dark">
            <Hero text={title}/>
            {resultsHtml && (
                <div className="container">
                    <div className="row">{resultsHtml}</div>
                </div>
            
            )}{" "}
            <h2 className="p-5">
                {"No Results found for " + keyword}
            </h2>
        </div>
    )
}
export default SearchView