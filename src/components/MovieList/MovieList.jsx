import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // on page load calls fetch movies saga
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* loops through movie state and renders
                    info/picture to dom */}
                {movies.map(movie => 
                  <MovieItem movie={movie} key={movie.id}/>
                )}
            </section>
        </main>

    );
}

export default MovieList;