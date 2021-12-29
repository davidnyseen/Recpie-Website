//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from '../components/banner/Banner';
import HomeBody from '../components/homeBody/HomeBody'
import { useDispatch, useSelector } from "react-redux";
import Home from '../components/home/Home';

export default function App() {

return (
    <div className="App">
      <Banner></Banner>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

