import { useState } from "react";
import './createRecipe.css'

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [mealType, setmealType] = useState('');
  const [picture, setpicture] = useState('');
  const [preprationtime, setpreprationtime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  function addingredient() {
    setIngredients(ingr => [...ingr, ingredient])
  }

  return (
    <div className="create">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">Recipe name:</label>
        <input
        className="input"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

<label className="label">preparation time:</label>
        <select
          value={preprationtime}
          onChange={(e) => setpreprationtime(e.target.value)}
        >
          <option value="0.5">half an hour</option>
          <option value="1">1 hour</option>
          <option value="1.5">1.5 hours</option>
          <option value="2">2 hours</option>
          <option value="2.5">2.5 hours</option>


        </select>
        <label className="label">ingredients:</label>
        <div className="ingredient">
          <input
          className="input"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          ></input>
          <button type="button" onClick={addingredient}>add ingredient</button>
        </div>
        <ul>{ingredients && ingredients.map(
          (ingr) => (<li>{ingr}</li>
          ))}
        </ul>

        <label className="label">mealType:</label>
        <select
          value={mealType}
          onChange={(e) => setmealType(e.target.value)}
        >
          <option value="breakfest">breakfest</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>

        </select>
         {/* add directions */}
        <label className="label" style={{marginTop:"30px"}}>add directions:</label>
        <textarea rows="5" cols="50" name="comment" form="usrform">
        </textarea>

        <label className="picture" >upload a picture of your recipe:</label>

        <input type="file"
        className="picture"
          id="picture" name="picture"
          accept="image/png, image/jpeg"
          value={picture}
          onChange={(e) => setpicture(e.target.value)}></input>
        <button className="sendrecipe">Add Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;