import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "./components/UserCard";
import axios from "axios";

const userData = {
  avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
  followers: 17,
  following: 13,
  html_url: "https://github.com/mhidalgo83",
  location: "Tucson, AZ",
  login: "mhidalgo83",
  name: "Matthew Hidalgo",
};
class App extends React.Component {
  state = {
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mhidalgo83")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err))
      .then(
        axios
          .get("https://api.github.com/users/mhidalgo83/followers")
          .then((res) =>{this.setState({followers: res.data})})
      );
    this.setState({ user: userData })
    console.log(this.state.followers);
  }

  render() {
    console.log(this.state.followers);
    return (
      <CssBaseline>
        <h1>Github Users of Lambda</h1>
        <div>
          <UserCard key={this.state.user.name} user={this.state.user} />;
        </div>
        {this.state.followers.map((user) => {
          return <UserCard key={user.name} user={user} />;
        })}
        <div></div>
      </CssBaseline>
    );
  }
}

export default App;
