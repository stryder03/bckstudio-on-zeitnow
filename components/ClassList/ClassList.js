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

// const ms = {
//     name: "Megan Sprenger",
//     bio: "Megan Sprenger received her Master of Fine Arts from Montana State University in 2019. She received " +
//         "her Bachelor of Fine Arts in Studio Art with an emphasis in ceramics and sculpture from the University " +
//         "of Minnesota Duluth in 2016. Her work is inspired by her love for traveling, combined with the history " +
//         "of ceramics and the progression of sciences. She interweaves psychology, biology, and urban planning " +
//         "philosophies into her work. The use of historical ideology within ceramics and architectural and city " +
//         "planning is incorporated to introduce a more modern theme and encourage on a conversation between the " +
//         "ceramic vessel and the viewer. The imagery and surface details exemplify disorders, more precisely as " +
//         "the small particles of matter that change our perceptions within a variety of situations. " +
//         "These situations come across in the ways that the space we live in creates a phenomenological " +
//         "atmosphere, ultimately mirroring our own subconscious development.",
//     statement: "Megan has been teaching art for the last three years. Her goals for her students are to step " +
//         "into a new tactile world where they can explore the use of ceramics through history, functionality, " +
//         "and expressions.\n Each student receives hands on time with Megan, as she breaks down the importance " +
//         "of ceramics as a material and its use in our daily lives.",
//
// };

const bckStaff = {
    name: "BCK Staff Member",
    bio: "One of our outstanding staff members will be teaching this class",
    statement: "At our core, artists are communicators. Here at Bozeman Community Kiln, our goal as instructors is to teach each student how to tell their own stories through ceramic creations",
};
export default function ClassList(props) {
    const classes = useStyles();
    const { classList, title } = props;

    const disableBookDialogButton = (clayClass, deviceSize) => {

        if (clayClass.disableBookingButton) {
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
            <BookServiceDialog apptType={clayClass.classId} buttonText={clayClass.buttonText}/>
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
            {classList.categoryClasses.map((clayClass, index) => (
                <React.Fragment key={index}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                            <Typography variant={"h5"} align={"center"} className={classNames(classes.classHeaders)}>
                                {getClassTitle(clayClass)}
                            </Typography>
                            <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders}>
                                With: <br/><InstrBioDialog instr={clayClass.instructor}/><br/>
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
                                    <li key={k}><Typography variant={"body1"}>
                                        {line}
                                    </Typography></li>
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

