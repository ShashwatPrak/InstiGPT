import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Homepage from "./Homepage";
import LoginRegisterForm from "./LoginRegisterForm"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/Login" exact element={<LoginRegisterForm login={1} />} />
          <Route path="/Register" exact element={<LoginRegisterForm  login={0} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
