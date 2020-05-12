import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "./components/UserCard";
import Grid from "@material-ui/core/Grid";

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

const followerData = [
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
    followers: 17,
    following: 13,
    html_url: "https://github.com/mhidalgo83",
    location: "Tucson, AZ",
    login: "mhidalgo83",
    name: "Matthew Hidalgo",
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
    followers: 17,
    following: 13,
    html_url: "https://github.com/mhidalgo83",
    location: "Tucson, AZ",
    login: "mhidalgo83",
    name: "Matthew Hidalgo",
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
    followers: 17,
    following: 13,
    html_url: "https://github.com/mhidalgo83",
    location: "Tucson, AZ",
    login: "mhidalgo83",
    name: "Matthew Hidalgo",
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
    followers: 17,
    following: 13,
    html_url: "https://github.com/mhidalgo83",
    location: "Tucson, AZ",
    login: "mhidalgo83",
    name: "Matthew Hidalgo",
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
    followers: 17,
    following: 13,
    html_url: "https://github.com/mhidalgo83",
    location: "Tucson, AZ",
    login: "mhidalgo83",
    name: "Matthew Hidalgo",
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/37632737?v=4",
    followers: 17,
    following: 13,
    html_url: "https://github.com/mhidalgo83",
    location: "Tucson, AZ",
    login: "mhidalgo83",
    name: "Matthew Hidalgo",
  },
];

class App extends React.Component {
  state = {
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/mhidalgo83"
      )
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://api.github.com/users/mhidalgo83/followers"
          )
          .then((res) => {
            const followerData = res.data;
            followerData.forEach((data) => {
              axios
                .get(
                  `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${data.login}`
                )
                .then((res) => {
                  const profData = res.data;
                  this.setState({
                    followers: [...this.state.followers, profData],
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          })
      );

    // this.setState({ user: userData });
    // this.setState({ followers: followerData });
  }

  renderFollowers = () => {};

  render() {
    console.log("Followers: ", this.state.followers);
    return (
      <CssBaseline>
        <h1>Github Users of Lambda</h1>
        <div>
          <Grid container justify="center">
            <Grid item xs={3}>
              <UserCard key={this.state.user.name} user={this.state.user} />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={6} justify="center">
            {this.state.followers.map((follower) => {
              return (
                <Grid item xs={3}>
                  <UserCard key={follower.name} user={follower} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </CssBaseline>
    );
  }
}

export default App;
