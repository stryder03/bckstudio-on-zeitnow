import React from "react";
import classNames from "classnames";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

import {makeStyles} from "@material-ui/core/styles";
import vertCones from "assets/img/bck/svg/bckVerticalCones.svg";
import horizCones from "assets/img/bck/svg/bckHorizonalCones.svg";
import styles from "assets/jss/nextjs-material-kit/components/businessInfoStyle.js";
import {Hidden} from "@material-ui/core";

const style = {
    ...styles,
    horizCones: {
        maxWidth: "15rem",
        marginTop: "2rem"
    }
};
const useStyles = makeStyles(style);

export default function BusinessInfo(props) {
    const classes = useStyles();
    const { } = props;
    return (
        <div>
            <div className={classes.dividerBar}/>
                <GridContainer spacing={0}>
                    <GridItem xs={12} sm={12} md={3}>
                        <h2 className={classNames(classes.title, classes.centered)}>HOURS</h2>
                        <p className={classes.centered}> Tuesday &amp; Wednesday 8:30AM - 5:30PM<br/>Thursday -
                            Saturday 9:00AM - 6:30PM<br/>Closed Sunday &amp; Monday</p>
                    </GridItem>
                    <Hidden smDown>
                        <img src={vertCones} alt={""} className={classes.verticalCones}/>
                    </Hidden>
                    <Hidden mdUp>
                        <img src={horizCones} alt={""} className={classes.horizCones}/>
                    </Hidden>
                    <GridItem xs={12} sm={12} md={3}>
                        <h2 className={classNames(classes.title, classes.centered)}>Location</h2>
                        <p className={classes.centered}>6062 Jackrabbit Lane<br/>
                            Belgrade, Montana 59714<br/>
                            <span className={classes.title}>Phone: </span><a href={"tel:+14062249229"}>(406)224-9229</a>
                        </p>
                    </GridItem>
                </GridContainer>
        </div>
    )
}
