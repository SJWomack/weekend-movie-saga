import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function MovieDetails(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.details)
    console.log(movieDetails)
    console.log(id);
 
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
            {movieDetails.genres.map((genre, index) => <h3 key ={index}>{genre}</h3>)}
            </div>}
        </>
    )




}


export default MovieDetails;