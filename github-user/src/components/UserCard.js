import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // width: "25%",
   
  },
  img: {
    borderRadius: "50%",
    width: "75%",
    margin: " 2% auto",
  },
});

const UserCard = (props) => {
  const classes = useStyles();

  console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          alt={`Github user: ${props.user.name}`}
          image={props.user.avatar_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            User name: {props.user.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Followers: {props.user.followers}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Following: {props.user.following}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {props.user.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Link: {<a href={props.user.html_url}>{props.user.html_url}</a>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
