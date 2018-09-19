import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import "./Header.css";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.auth = new AuthService();

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.auth.logOut();
    this.forceUpdate();
  }

  render() {
    return (
      <header className="header">
        <Link to={`/`} className="logo">
          Logo
        </Link>
        <ul className="navbar-menu">
          {!this.auth.isLoggedIn && (
            <li>
              <Link to={`/login`}>Вход</Link>
            </li>
          )}
          {!this.auth.isLoggedIn && (
            <li>
              <Link to={`/register`}>Регистрация</Link>
            </li>
          )}
          {this.auth.isLoggedIn && (
            <li>
              <Link to={`/notes`}>Заметки</Link>
            </li>
          )}
          {this.auth.isLoggedIn && (
            <li>
              <span onClick={this.logOut}>Выход</span>
            </li>
          )}
          {/* <li>
            <a href="#">link 3</a>
            <ul>
              <li>
                <a href="#">dropdown 1</a>
              </li>
              <li>
                <a href="#">dropdown 2</a>
              </li>
              <li>
                <a href="#">dropdown 3</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </header>
    );
  }
}
