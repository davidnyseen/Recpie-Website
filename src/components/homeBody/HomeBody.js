import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';
import './HomeBody.css'

const HomeBody = ({ recipe, index }) => {
  let navigate = useNavigate(); // like href

  function goToSinglePage() {
    navigate(`/singlerecipe/${index}`);
  }


  return (
    <div className="recipe">
      
      <div className="recipe-preview" >
        {/* <span>{recipe._links.self.href}</span> */}
        <Card sx={{ maxWidth: 245 }}>
          <CardActionArea onClick={goToSinglePage}>

            <CardMedia

              component="img"
              height="240"
              image={recipe.recipe.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.recipe.dishType}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>);
}


export default HomeBody;