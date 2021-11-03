import React from "react";
import { Header } from "./components/Header/Header";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App () {

  return(
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
