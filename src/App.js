import {useEffect} from 'react';

//535f177d
const API_URL = 'https://www.omdbapi.com?apikey=535f177d';


const App = () => {
  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
}
useEffect(() => {
  fetchMovies("Spiderman") 
  }, [])
      
  return (
    <h1>App</h1>
);
}

export default App;