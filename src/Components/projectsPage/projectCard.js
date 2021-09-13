import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "15px",
    margin: "1rem",
    width: "20rem",
    height: '',
  },
  media: {
    height: 70,
    margin: "1rem",
    padding: "5rem",
  },
  textmedia: {
    height: 100,
  },
  area: {
    height: '450px',
  }
}));

export default function ProjectCard(props) {
  const { id, project_name, project_link, description, image_url } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card key={id} className={classes.root}>
        <CardActionArea className={classes.area}>
          <CardMedia
            className={classes.media}
            image={image_url}
            title={project_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project_name}
            </Typography>
            <Typography className={classes.textmedia} variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions align="center">
          <IconButton
            onClick={() => {
              window.location.href = project_link;
            }}
          >
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
