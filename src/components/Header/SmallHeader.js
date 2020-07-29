import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "src/assets/jss/nextjs-material-kit/components/headerStyle.js";
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import LogoButton from "../Buttons/LogoButton";

const style = {
  ...styles,
};
const useStyles = makeStyles(style);

function SmallHeader(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { rightLinks, fixed, absolute, color } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.color]: color
  });

  return (
      <div>
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        <LogoButton href={"/"}/>
        <BookServiceDialog className={classNames(classes.heroButton)} buttonText={"Book Now"}/>
      </Toolbar>
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {rightLinks}
          </div>
        </Drawer>
    </AppBar>
      </div>
  );
}

SmallHeader.defaultProp = {
  color: "white"
};

SmallHeader.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is higher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default SmallHeader;
