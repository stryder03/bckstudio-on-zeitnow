import React, {useEffect} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "src/assets/jss/nextjs-material-kit/components/headerStyle.js";
import LogoButton from "../Buttons/LogoButton";

const style = {
  ...styles,
};
const useStyles = makeStyles(style);

function LargeHeader(props) {
  const classes = useStyles();

  useEffect(() => {

    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const {changeColorOnScroll} = props;
    const windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes[color]);
        document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes[changeColorOnScroll.color]);
        if (document.getElementById("nav_logo")) {
          if (document.getElementById("nav_logo").hasAttribute("hidden")) {
            document
                .getElementById("nav_logo")
                .removeAttribute("hidden")
          }
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
              .setAttribute("hidden", true)
        }
      }
  }
  const { color, rightLinks, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,

  });


  const logoButton = (hidden, id) => <LogoButton id={id} href={"/"} hidden={hidden}/>;
  return (
      <div>
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
          {logoButton(true, "nav_logo")}
          {rightLinks}
      </Toolbar>
    </AppBar>
      </div>
  );
}

LargeHeader.defaultProp = {
  color: "white"
};

LargeHeader.propTypes = {
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

export default LargeHeader;
