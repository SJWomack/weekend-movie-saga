import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'

//renders movie details
function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.details)
    console.log(movieDetails)
    console.log(id);

    //calls detail saga on page load
    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: id
        })
    }, [id])

    return (
        <>
            {movieDetails.title &&
                <div>
                    <h1 className='movie-title'>{movieDetails.title}</h1>
                    <h3 className='genre'>Genres</h3>
                    <div className='genres'>
                        {/* loops through genres and renders on dom */}
                        {movieDetails.genres.map((genre, index) => <h5 className='genre-name' key={index} >{genre}</h5>)}
                    </div>
                    <img src={movieDetails.poster} />
                    <h4 className='description'>{movieDetails.description}</h4>
                </div>}
        </>
    )




}


export default MovieDetails;