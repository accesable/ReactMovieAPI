import {useEffect, useState} from "react";


// aa4fc69d
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=aa4fc69d'
const movie1 ={
    
        "Title": "To All the Boys I've Loved Before",
        "Year": "2018",
        "imdbID": "tt3846674",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_SX300.jpg"
    
}

const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm]= useState('')

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('The Boys')
    },[])

    return(
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length>0 ?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard
                                movie={movie}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies founded</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;