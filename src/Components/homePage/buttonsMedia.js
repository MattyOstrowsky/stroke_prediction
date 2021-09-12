import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ClassIcon from "@material-ui/icons/Class";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridcard: {
    paddingBottom: "2rem",
    borderRadius: "25px",
    marginTop: "4rem",
  },
  iconsize: {
    fontSize: "small",

    "@media (min-width:600px)": {
      fontSize: "medium",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "large",
    },
  },
}));
export default function ButtonsMedia() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      display="flex"
      className={classes.gridcard}
    >
      <IconButton
        size="small"
        onClick={() => {
          window.location.href = "https://github.com/gunater";
        }}
      >
        <GitHubIcon className={classes.iconsize} />
        GitHub
      </IconButton>
      <IconButton
        size="small"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/mateusz-ostrowski-94750918a/";
        }}
      >
        <LinkedInIcon className={classes.iconsize} />
        LinkedIn
      </IconButton>
      <IconButton
        size="small"
        onClick={() => {
          window.location.href = "https://www.kaggle.com/gunater";
        }}
      >
        <ClassIcon className={classes.iconsize} />
        Kaggle
      </IconButton>
    </Grid>
  );
}
