import {Hidden, Typography} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import classNames from "classnames";
import vCone from "../../assets/img/bck/svg/bckVerticalCones.svg";
import hCone from "../../assets/img/bck/svg/bckHorizonalCones.svg";
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {brandFont, dividerBar, mainElement} from "../../assets/jss/nextjs-material-kit";
import InstrBioDialog from "../BioDialog/InstrBioDialog";


const useStyles = makeStyles((theme) => ({
    categoryHeaders: {
        color: theme.palette.primary.main,
            marginTop: "2.5rem"
    },
    classHeaders: {
        ...brandFont,
        color: "#555"
    },
    classSubHeaders: {
        color: "#606060",
    },
    verticalCones: {
        height:"20rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    horizontalCones: {
        width: "10rem",
    },
    bookButton: {
        marginLeft: "30%"
    },
    smallButton: {
        margin: "auto"
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    strike: {
        marginTop: "1rem",
        color: "#f00",
        textDecoration: "line-through"
    },
    strikeText: {
        color: "#333"
    },
    pricing:{
        marginTop: "-1rem",
        marginLeft: "2.5rem"
    },
    priceList: {
        marginTop: "0"
    },
}));

export default function ClassList(props) {
    const classes = useStyles();
    const { classList, title, defaultInstructor } = props;

    const disableBookDialogButton = (clayClass, deviceSize) => {

        if (clayClass.disableBookingButton || !clayClass.classLink) {
            if(deviceSize === "small"){
                return (
                    <Typography align={"center"} className={classNames(classes.classHeaders)}>Call to be placed on our Waitlist!</Typography>
                );
            }
            return (
                <Typography align={"left"} className={classNames(classes.classHeaders)}>Call to be placed on our Waitlist!</Typography>
            );
        }
        return (
            <BookServiceDialog src={clayClass.classLink} buttonText={clayClass.buttonText}/>
            );
    };

    const getClassTitle = (clayClass) => {
        if(!clayClass.displayTitle){
            return clayClass.className;
        }

        return clayClass.displayTitle
    };


    return <React.Fragment>
        <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
            {title}
        </Typography>
            {classList.classes.map((clayClass, index) => (
                <React.Fragment key={index}>
                    <GridContainer className={classes.container} alignItems={"center"}>
                        <GridItem xs={12} sm={12} md={3}>
                            <Typography variant={"h5"} align={"center"} className={classNames(classes.classHeaders)}>
                                {getClassTitle(clayClass)}
                            </Typography>
                            <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders}>
                                With: <br/><InstrBioDialog instr={clayClass.instructor} defaultInstructor={defaultInstructor}/><br/>
                            </Typography>
                            {clayClass.classInfoList.map((line, j) => (
                                <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders} key={j}>
                                    {line}
                                </Typography>
                            ))}
                        </GridItem>
                        <Hidden smDown>
                            <img src={vCone} alt={""} className={classes.verticalCones}/>
                        </Hidden>
                        <Hidden mdUp>
                            <img src={hCone} alt={""} className={classes.horizontalCones}/>
                        </Hidden>
                        <GridItem xs={12} sm={12} md={6}>
                            <ul>
                                {clayClass.classDescriptionList.map( (line, k) => (
                                    <li key={k}>
                                        <Typography variant={"body1"}>
                                            {line}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                            <Hidden smDown>
                                <div className={classes.bookButton}>
                                    {disableBookDialogButton(clayClass)}
                                </div>
                            </Hidden>
                        </GridItem>
                    </GridContainer>
                    <Hidden mdUp>
                        <div className={classNames(classes.smallButton)}>
                            {disableBookDialogButton(clayClass, "small")}
                        </div>
                    </Hidden>
                    <Hidden smDown>
                        <div className={classes.raisedDivider}/>
                    </Hidden>
                </React.Fragment>
            ))}
        </React.Fragment>
}

