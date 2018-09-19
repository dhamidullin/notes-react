import React, { Component } from "react";
import AuthService from "../../services/auth.service.jsx";

import "./Register.css";

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.auth = new AuthService();
    this.state = {
      username: "",
      password: "",
      repeat: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.hour = 1000 * 60;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.auth.register(this.state, data => {
      if (data.token) this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Регистрация</h1>

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            pattern="[a-zA-Z0-9_]{4,32}"
            onChange={this.handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            pattern="[a-zA-Z0-9_]{6,32}"
            required
            onChange={this.handleInputChange}
          />

          <label htmlFor="repeat">
            <b>Repeat</b>
          </label>
          <input
            type="password"
            name="repeat"
            id="repeat"
            placeholder="Repeat"
            pattern="[a-zA-Z0-9_]{6,32}"
            required
            onChange={this.handleInputChange}
          />

          <input type="submit" value="Вход" />
        </form>
      </div>
    );
  }
}
