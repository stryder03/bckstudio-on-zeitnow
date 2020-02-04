import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, _justify, _direction, _alignItems, spacing, ...rest } = props;
  return (
    <Grid container justify={_justify} direction={_direction}  spacing = {spacing} alignItems={_alignItems} {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: "",
  _justify: "center",
  _direction: "row",
  _alignItems: "center"
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
