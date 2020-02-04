import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core";

import styles from "assets/jss/nextjs-material-kit/components/heroImg";

const useStyles = makeStyles(styles);

export default function HeroImg(props) {
    const {image, children} = props;
    const classes = useStyles();
    const heroClasses = classNames(classes.container,);
    return (
        <div
            className={heroClasses}
            style={{
                backgroundImage: "url(" + image + ")",
            }}
        >
            {children}
        </div>
    );
};

