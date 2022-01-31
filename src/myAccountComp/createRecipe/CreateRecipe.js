import { useEffect, useState } from "react";
import './createRecipe.css'
import { useForm } from "react-hook-form";
import FileUploader from '../../components/fileUploader/FileUploader'
const CreateRecipe = () => {
  const [file, setFile] = useState({});
  const formData = new FormData();

  const [recipename, setname] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [mealType, setmealType] = useState('breakfest');
  const [directions, setdirections] = useState(' ');
  let [pictures, setpictures] = useState([]);
  const [preprationtime, setpreprationtime] = useState(' ');


  async function handleSubmit(e) {
    e.preventDefault();
    const value = JSON.stringify({ recipename, ingredients,
    mealType, directions, pictures, preprationtime });
    fetch('http://localhost:5000/submitNewRecipe', {
        method: 'post',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: value,
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch((error) => {
        console.log(error)
      });
    
   
  }
  function addingredient() {
    setIngredients(ingr => [...ingr, ingredient])
  }
  function setimage(e) {
    setFile(e.target.files[0]);
    formData.append('file', file);
    setpictures(a=>[...a, file])
    console.log(formData);
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
          value={recipename}
          onChange={(e) => setname(e.target.value)}
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
          (ingr, i) => (
            <li key={i}>{ingr}</li>
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
        <label className="label" style={{ marginTop: "30px" }}>add directions:</label>
        <textarea rows="5" cols="50" name="comment" form="usrform"
          value={directions}
          onChange={(e) => setdirections(e.target.value)}>
        </textarea>

        <label className="picture" >upload a picture of your recipe:</label>

        <input type="file"  multiple="multiple"
          className="picture"
          id="picture" name="picture"
          accept="image/png, image/jpeg"
          onChange={setimage}></input>
          {/* <FileUploader/> */}
        <button className="sendrecipe">Add Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;