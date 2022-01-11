import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';
import './HomeBody.css'

const HomeBody = ({ recipes }) => {
  // let a = recipes[0].recipe.uri.text.split("http://www.edamam.com/ontologies/edamam.owl#recipe_1");
// console.log(a)
  let navigate = useNavigate(); // like href

  function goToSinglePage () {
    let singlerecipeid=9;
    navigate(`/singlerecipe/${singlerecipeid}`);
  }
  
  // function goToSinglePage (card) {
  //   let singlerecipeid = card.getAttribute("data-link");
  //   navigate(`/singlerecipe/${singlerecipeid}`);
  // }
  return (
    <div className="recipe">
      {recipes.map((recipe, i) => (
        
        <div className="recipe-preview" key={i} >
{/* <span>{recipe._links.self.href}</span> */}
         <Card sx={{ maxWidth: 245 }}>
            {/* <CardActionArea onClick={goToSinglePage(this)} data-link={recipe._links.self.href} > */}
            <CardActionArea  onClick={goToSinglePage}>

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
      ))}
    </div>);
}


export default HomeBody;