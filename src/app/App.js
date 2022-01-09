import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from '../components/banner/Banner';
import Home from '../pages/home/Home';
import MyAccount from "../pages/myAccount/MyAccount";
import About from "../pages/about/About";
import Categories from "../pages/categories/Categories";
import NotFound from "../pages/notFound/NotFound";
import SingleRecipe from "../pages/singleRecipe/SingleRecipe";
import CreateRecipe from "../myAccountComp/createRecipe/CreateRecipe";

export default function App() {
return (
    <div className="app">
      <BrowserRouter>
      <Banner></Banner>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="myaccount" element={<MyAccount />} >
            <Route path="create" element={<SingleRecipe />} />
          </Route>
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
          <Route path="singlerecipe" element={<SingleRecipe />} />
          <Route path="create" element={<CreateRecipe />} />


    </Routes>
    </BrowserRouter>
    </div>
  );
}

