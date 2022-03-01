import React from "react";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MlModelPage from "./Components/predictModelPage/mlModelPage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    padding: 0,
    color: "#fff",
    background: "linear-gradient(0,#281130 50%,#030133)",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MlModelPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
