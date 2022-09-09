import Hero from "./Hero";
import NowPlaying from "./NowPlaying";
const Home = () => {
  
  return (
    <div className="bg-dark">
      <Hero text="Welcome to MovieDatabase - React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to my movie database search site, a simple but functional website that serves as an example of my React.js experience. It shows 3 main skill sets:
              <br/>-Bootstrap 5 usage 
              <br/>-API integration 
              <br/>-The underlying Javascript knowledge to tie it together. 
            </p>
          </div>
        </div>
      </div>
      {/* Now Playing */}
      <div className="w-100 m-5 bg-dark">
        <h2 className="text-center text-bg-primary">Now Playing</h2>
        <NowPlaying/>
      </div>


    </div>
    
  );
 
};
export default Home;
