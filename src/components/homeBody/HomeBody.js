import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';
import './HomeBody.css'

const HomeBody = ({ recipes }) => {
  let navigate = useNavigate(); // like href

  function goToSinglePage (e) {
    navigate('/singlerecipe');

  }
  return (
    <div className="recipe">
      {recipes.map(recipe => (
        <div className="recipe-preview" key={recipe.id} >
          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea onClick={goToSinglePage}>
              <CardMedia
                
                component="img"
                height="240"
                image={recipe.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>);
}


export default HomeBody;