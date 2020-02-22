import classNames from "classnames";
import React from "react";
import {brandFont} from "../../assets/jss/nextjs-material-kit";
import {makeStyles} from "@material-ui/core/styles";

const style = theme => ({
    mainContentRaised: {
        zIndex: "3",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto",
        },
        backgroundColor: theme.palette.secondary.main,
        position: "relative",
        textAlign: "center"
    },
    brandFont

});

const useStyles = makeStyles(style);
export default function BrandedHeader(props) {
    const classes = useStyles();
    return (
        <div className={classNames(classes.mainContentRaised)}>
            {props.children}
        </div>
    )
}
