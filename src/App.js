import {useEffect, useState} from 'react';
import './App.css';
import searchIcon from "./search.svg"
import MovieCard from './MovieCard';

//535f177d
const API_URL = 'https://www.omdbapi.com?apikey=535f177d';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
}
useEffect(() => {
  fetchMovies("Spiderman") 
  }, [])
      
  return (
    <div className='app'>
      <h1>Fmmzy Movie App</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>{ setSearchTerm(e.target.value)}} />

        <img src={searchIcon} alt="search icon" onClick={()=>{fetchMovies(searchTerm)}} />
      </div>
      {movies?.length > 0 ?
        (
          <div className="container">
        {movies.map((movie) =>{
          return <MovieCard movies={movie}/>
        })
        }
      </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      
    </div>
);
}

export default App;