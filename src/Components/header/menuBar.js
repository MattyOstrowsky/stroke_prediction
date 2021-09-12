import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Toolbar } from "@material-ui/core";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

const Primary = blueGrey[100];
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    borderRadius: "25xp",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Roboto",
    borderRadius: "25px",
    paddingLeft: "2vh",
    paddingRight: "2vh",
    color: Primary,
    size: "small",
    "@media (min-width:600px)": {
      size: "small",
    },
    [theme.breakpoints.up("md")]: {
      size: "small",
    },
  },
  menu: {
    color: "white",
    textAlign: "right",
    alignItems: "center",
  },
}));
export default function MenuBar() {
  const classes = useStyles();
  return (
    <Toolbar variant="dense">
      <Typography>
        <IconButton
          component={Link}
          to="/"
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <EmojiFoodBeverageIcon style={{ fontSize: 45 }} />
        </IconButton>
      </Typography>
      <Typography className={classes.root}>
        <Button
          className={classes.linkButton}
          component={Link}
          to="/About"
          label="About"
        >
          About
        </Button>
      </Typography>
      <Typography className={classes.root}>
        <Button className={classes.linkButton} component={Link} to="/Projects">
          Projects
        </Button>
      </Typography>
      <Typography className={classes.root}>
        <Button className={classes.linkButton} component={Link} to="/Contact">
          Contact
        </Button>
      </Typography>
      <Typography className={classes.root}>
        <Button
          className={classes.linkButton}
          component={Link}
          to="/strokemodel"
        >
          Stroke prediction
        </Button>
      </Typography>
    </Toolbar>
  );
}
