 
import '../css/MovieHolder.css';
import Movie from "./Movie.js"
import React from 'react';
import Login from './Login'
import LoggedIn from './LoggedIn';
import { BrowserRouter as Router,
    Route,
    Routes,
    useLocation} from 'react-router-dom'; 


function MovieHolder(props){ //good practice to wrap long html in () because JS text editors can sometimes preemptively put ; where they don't belong
                  //and end your 'single line' of code early

    let [movies, setMovies] = React.useState([
        
    ])

    function addMovie(){
        let new_movies = [...movies] //creates new array that holds all the same things as movies
        new_movies.push(
            {
                id: Date.now() //date down to microseconds so it will likely be a new id
            }
        )
        setMovies(new_movies);
    }
    
    function deleteMovie(id){
        let new_movies = [];
        for (let movie of movies){
            if (id !== movie.id){
                new_movies.push(movie);
            }
        }
        setMovies(new_movies);
    }

    return (<div>
                {/* <Counter/> Demonstrates how state works - press button to increment a counter*/}
                <div className = "div-board">
                    <div className ="row">
                        {movies.map(movie => <Movie key = {movie.id} id = {movie.id} deleteHandler = {deleteMovie}/>)}
                                                {/*Key is used to identify which object in an array changes when rerendering*/}
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={addMovie}>Add</button>
                </div>
            </div>)

    //able to put other custom components inside larger components 
}
export default MovieHolder;