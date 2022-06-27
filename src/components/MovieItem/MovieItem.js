import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function MovieItem({movie}) {
    const history = useHistory();
    
    // on click push url of detail page for movie to history
    const handleClick = () => {
        history.push(`/details/${movie.id}`);
    }

    return (
        <div  onClick={handleClick}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    );
}

export default MovieItem;