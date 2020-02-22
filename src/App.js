import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import logo from "./logo.svg";
import WithHooks from "./WithHooks";
import WithoutHooks from "./WithoutHooks";
import Titles from "./components/Titles";
import "./App.css";

const styles = {
  gridContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    background: "#84EEFF"
  },
  headers: {
    color: "#84EEFF"
  }
};

const App = props => {
  const [level, setLevel] = useState(0);
  const { classes } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item md={3}>
            <h2 className={classes.headers}>Hook Type</h2>
            <Titles level={level} />
          </Grid>

          <Grid item md={3}>
            <h2 className={classes.headers}>Without Hooks</h2>
            <WithoutHooks level={level} />
          </Grid>
          <Grid item md={3}>
            <h2 className={classes.headers}> With Hooks</h2>
            <WithHooks level={level} />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setLevel(level + 1)}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);
