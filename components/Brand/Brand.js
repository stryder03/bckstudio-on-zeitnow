import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/components/brandStyle.js";

const useStyles = makeStyles(styles);

export default function Brand(props) {
    const classes = useStyles();
    const { logoType, logoSrc, altTxt, id} = props;
    return (
        <img id={id} className={classes[logoType]} src={logoSrc} alt={altTxt}/>

    );
}

Brand.propTypes = {
    logoType: PropTypes.oneOf([
        "nav_logo_lg",
        "nav_logo_sm",
    ]),
};
