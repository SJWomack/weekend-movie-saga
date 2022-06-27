import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

//renders movie details
function MovieDetails(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.details)
    console.log(movieDetails)
    console.log(id);
 
    //calls detail saga on page load
       useEffect(() =>{ dispatch({
            type: 'FETCH_DETAILS',
            payload: id
        })
       }, [])
       
    return (
        <>
            {movieDetails.title &&
            <div>
            <h1>{movieDetails.title}</h1>
            <img src={movieDetails.poster}/>
            <h3>{movieDetails.description}</h3>
            <h3>Genres</h3>
            {/* loops through genres and renders on dom */}
            {movieDetails.genres.map((genre, index) => <h4 key ={index}>{genre}</h4>)}
            </div>}
        </>
    )




}


export default MovieDetails;