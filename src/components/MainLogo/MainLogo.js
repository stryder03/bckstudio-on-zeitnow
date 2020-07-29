import styles from "src/assets/jss/nextjs-material-kit/components/mainLogoStyle"
import {Hidden, makeStyles} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import kilnLogo from "../../assets/img/bck/svg/bckHorizontalLogo.svg";
import React from "react";

const style = {
    ...styles,
    heroButton: {
        position: "sticky",
    }
};
const useStyles = makeStyles(style);

export default function MainLogo() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Hidden smDown>
                        <img src={kilnLogo} alt={"Bozeman Community Kiln"} height={"197px"}/>
                    </Hidden>
                </GridItem>
            </GridContainer>
        </div>
    )
}
