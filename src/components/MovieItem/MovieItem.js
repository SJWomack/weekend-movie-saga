import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './MovieItem.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MovieItem({movie}) {
    const history = useHistory();
    
    // on click push url of detail page for movie to history
    const handleClick = () => {
        history.push(`/details/${movie.id}`);
    }

    return (
        <Card onClick={handleClick} sx={{ maxWidth:200, minWidth: 200, margin: 5, backgroundColor:'gray'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={movie.poster}
          alt={movie.name}
        />
        <CardContent sx={{backgroundColor: 'silver', height: '50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    );
}

export default MovieItem;