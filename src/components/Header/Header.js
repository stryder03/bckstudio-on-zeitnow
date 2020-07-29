import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
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

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {color, changeColorOnScroll} = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[color]);
      document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.color]);
      if (document.getElementById("nav_logo")) {
        document
            .getElementById("nav_logo")
            .hidden = false;
      }
    } else {
      document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[color]);
      document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.color]);
      if (document.getElementById("nav_logo")) {
        document
            .getElementById("nav_logo")
            .hidden = true;
      }
    }
  }
  const { color, rightLinks, leftLinks, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,

  });

  return (
      <div>
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden mdDown>
          <LogoButton id={"nav_logo"} href={"/index"}/>
          {rightLinks}
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <LogoButton id={"nav_logo"} href={"/index"}/>
          <BookServiceDialog className={classNames(classes.heroButton)} buttonText={"Book Now"}/>
        </Hidden>
      </Toolbar>
      <Hidden lgUp>
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
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
      </div>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
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
