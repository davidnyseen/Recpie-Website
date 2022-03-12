import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';
import './HomeBody.css'

const HomeBody = ({ index, image, label, dishType }) => {
  let navigate = useNavigate(); // like href
  function goToSinglePage() {
    navigate(`/singlerecipe/${index}`);
  }
 // image, label, dishType
//  recipe.recipe.image, recipe.recipe.label, recipe.recipe.dishType
  return (
    <div className="recipe">
      
      <div className="recipe-preview" >
        {/* <span>{recipe._links.self.href}</span> */}
        <Card sx={{ maxWidth: 340, height:500 }}>
          <CardActionArea onClick={goToSinglePage}>

            <CardMedia

              component="img"
              height="340"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {(label.substring(0, 30))+".."}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dishType}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>);
}


export default HomeBody;