import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeComponent from "./components/home/Home.jsx";
import HeaderComponent from "./components/header/Header.jsx";
import RegisterComponent from "./components/register/Register.jsx";
import LoginComponent from "./components/login/Login.jsx";
import NotesComponent from "./components/notes/Notes.jsx";

import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route path="*" component={HeaderComponent} />
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/register" component={RegisterComponent} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/notes" component={NotesComponent} />
    </div>
  </Router>,
  document.getElementById("root")
);
