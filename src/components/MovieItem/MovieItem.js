import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function MovieItem({movie}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })

        history.push('/details');
    }
    return (
        <div key={movie.id}  onClick={handleClick}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    );
}

export default MovieItem;