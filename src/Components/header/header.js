import React from "react";
import HamburgerMenu from "./menuHamburger";
import { Hidden, AppBar, makeStyles } from "@material-ui/core";
import MenuBar from "./menuBar";

const useStyles = makeStyles((theme) => ({
  root: {},
  bar: {
    borderRadius: "205xp",
  },
  menu: {
    color: "white",
    textAlign: "right",
    alignItems: "center",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="sticky" color="transparent">
        <Hidden smDown className={classes.menu}>
          <MenuBar />
        </Hidden>
        <Hidden mdUp className={classes.menu}>
          <HamburgerMenu />
        </Hidden>
      </AppBar>
    </div>
  );
}
