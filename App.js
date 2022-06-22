import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'
import NotFoundPage from './components/NotFoundPage'
import NowPlaying from "./components/NowPlaying";

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d30ed6efefc5a078c3a1471cf980026&language=en-US&query=${searchText}&page=1&include_adult=false`) 
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setSearchResults(data.results)
      })
    }
  }, [searchText])

  return (
    <div className='text-bg-dark fill'>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutView/>} />
        <Route exact path="/movies/:id" element={<MovieView/>} />
        <Route exact path='/search' element={<SearchView 
          keyword={searchText} 
          searchResults={searchResults} />} 
        />
        <Route exact path='/nowPlaying' element={<NowPlaying/>} />
        <Route path="*" element={<NotFoundPage/>} />  
      </Routes>

    </div>
  );
}

export default App;
