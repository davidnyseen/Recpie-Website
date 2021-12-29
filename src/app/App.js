import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from '../components/banner/Banner';
import HomeBody from '../components/homeBody/HomeBody'
import { useDispatch, useSelector } from "react-redux";

export default function App() {

  return (
    <div className="App">
<Banner></Banner>
<HomeBody></HomeBody>

    </div>
  );
}

