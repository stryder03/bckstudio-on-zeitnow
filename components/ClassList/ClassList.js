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

const ms = {
    name: "Megan Sprenger",
    bio: "Megan Sprenger received her Master of Fine Arts from Montana State University in 2019. She received " +
        "her Bachelor of Fine Arts in Studio Art with an emphasis in ceramics and sculpture from the University " +
        "of Minnesota Duluth in 2016. Her work is inspired by her love for traveling, combined with the history " +
        "of ceramics and the progression of sciences. She interweaves psychology, biology, and urban planning " +
        "philosophies into her work. The use of historical ideology within ceramics and architectural and city " +
        "planning is incorporated to introduce a more modern theme and encourage on a conversation between the " +
        "ceramic vessel and the viewer. The imagery and surface details exemplify disorders, more precisely as " +
        "the small particles of matter that change our perceptions within a variety of situations. " +
        "These situations come across in the ways that the space we live in creates a phenomenological " +
        "atmosphere, ultimately mirroring our own subconscious development.",
    statement: "Megan has been teaching art for the last three years. Her goals for her students are to step " +
        "into a new tactile world where they can explore the use of ceramics through history, functionality, " +
        "and expressions.\n Each student receives hands on time with Megan, as she breaks down the importance " +
        "of ceramics as a material and its use in our daily lives.",

};
const ale = {
    name: "Ashleah",
    bio: "Ashleah holds a BFA in Ceramics from Montana State University and a license in Vocational Nursing. Ashleah has helped curate an exhibit at the Museum of the Rockies, participated in juried and collaborative art shows in and out of Montana State University, and created work for many non-profit fundraising events. Ashleah has taught skills in the ceramic medium to a wide variety of individuals. In her own work, Ashleah explores the emotional and physical impact objects can have on the subconscious. She uses subliminal cultural references, local materials, essential oils, and tactile perceptions to elicit mindful experiences.",
    statement: "Ashleah enjoys helping people develop skills and create with clay. From children to older adults and individuals with special needs, she believes that working with clay is a pastime that builds community, fosters healing, and provides lasting life skills."
};
const bckStaff = {
    name: "BCK Staff Member",
    bio: "One of our outstanding staff members will be teaching this class",
    statement: "At our core, artists are communicators. Here at Bozeman Community Kiln, our goal as instructors is to teach each student how to tell their own stories through ceramic creations",
};
export default function ClassList(props) {
    const classes = useStyles();
    const { classList } = props;

    const instructor = (instructor) => {
        switch (instructor) {
            case "Megan Sprenger":
                return ms;
            case "Ashleah":
                return ale;
            default:
                return bckStaff;
        }
    };
    const getClassInstr = (classInfo) => {
            if (!classInfo.instructor){
                return
            }
        return (
            <React.Fragment>
                <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders}>
                    With: <br/><InstrBioDialog instr={instructor(classInfo.instructor)}/><br/>
                </Typography>
            </React.Fragment>
        )
    };
    const getPriceList = (classInfo) => {
        if (!classInfo.pricing){
            return
        }

        return (
            <React.Fragment>
                <div className={classes.pricing}>
                    <Typography variant={"h6"} color={"primary"} >
                        {classInfo.pricing.title}
                    </Typography>
                </div>
                <ol className={classes.priceList}>
                    {classInfo.pricing.priceList.map((item, index) => {
                        if (!item.strikeItem){
                            return (
                                <li key={index}><Typography variant={"body1"} >
                                    {item}
                                </Typography></li>

                            )
                        }
                        return (
                            <li key={index}><Typography variant={"body1"} >
                                {item.strikeItem.clearText} <span className={classes.strike}><span className={classes.strikeText}>{item.strikeItem.strikeText}</span></span>
                            </Typography></li>
                        )
                    })
                    }
                </ol>
            </React.Fragment>
        )
    };

    const disableBookDialogButton = (clayClass) => {

        if (clayClass.disable) {
            return (
                <Typography align={"left"} className={classNames(classes.classHeaders)}>Call to be placed on our Waitlist!</Typography>
            );
        }
        return (
            <BookServiceDialog apptType={clayClass.classID} buttonText={clayClass.buttonText}/>
            );
    };
    return (
        <React.Fragment>
            {classList.map((classType, index) => (
                <React.Fragment key={index}>
                    <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                        {classType.category}
                    </Typography>
                    {classType.categoryList.map((clayClass, i) => (
                        <React.Fragment key={i}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                    <Typography variant={"h5"} align={"center"} className={classNames(classes.classHeaders)}>
                                        {clayClass.title}
                                    </Typography>
                                    {getClassInstr(clayClass.classInfo)}
                                    {clayClass.classInfo.subtitles.map((subtitle, j) => (
                                        <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders} key={j}>
                                            {subtitle}
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
                                        {clayClass.classDescription.map( (line, k) => (
                                            <li key={k}><Typography variant={"body1"}>
                                                {line}
                                            </Typography></li>
                                        ))}
                                    </ul>
                                    {getPriceList(clayClass.classInfo)}
                                    <Hidden smDown>
                                        <div className={classes.bookButton}>
                                            {disableBookDialogButton(clayClass)}
                                        </div>
                                    </Hidden>
                                </GridItem>
                            </GridContainer>
                            <Hidden mdUp>
                                <div className={classNames(classes.smallButton)}>
                                    <BookServiceDialog apptType={classList.classID} buttonText={classList.buttonText}/>
                                </div>
                            </Hidden>
                            <Hidden smDown>
                                <div className={classes.raisedDivider}/>
                            </Hidden>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}

