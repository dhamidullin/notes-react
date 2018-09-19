import axios from "axios";

export default class AuthService {
  constructor() {
    this.getUsername = this.getUsername.bind(this);

    this.register = this.register.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  saveToken(token) {
    window.localStorage.setItem("token", token);
  }
  removeToken() {
    window.localStorage.removeItem("token");
  }
  get token() {
    return window.localStorage.getItem("token");
  }

  get isLoggedIn() {
    let token = window.localStorage.getItem("token");
    if (token) {
      var payload = JSON.parse(window.atob(token.split(".")[1]));

      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  getUsername() {
    if (this.isLoggedIn) {
      var payload = JSON.parse(window.atob(this.token.split(".")[1]));

      return payload.username;
    } else return null;
  }

  register(user, callback) {
    axios.post("/api/authentication/register", user).then(data => {
      this.saveToken(data.data.token);
      callback(data.data);
    });
  }
  logIn(user, callback) {
    axios.post("/api/authentication/login", user).then(data => {
      this.saveToken(data.data.token);
      callback(data.data);
    });
  }
  logOut() {
    window.localStorage.removeItem("token");
  }
}
