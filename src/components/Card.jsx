import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    minWidth: 250,
    padding: 15,
    display: "flex",
    flexDirection: "column"
  }
};

const CardCustom = props => {
  const { classes, children } = props;
  return <Card className={classes.card}>{children}</Card>;
};

CardCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(CardCustom);
