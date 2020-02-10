import React from "react";
// core components
import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles";
import {Hidden, Typography} from "@material-ui/core";
import classNames from "classnames";
// Sections for this page


import {
    brandFont, dividerBar,
    mainElement,
    playBrand,
    primaryFontColor,
    secondaryColor,
    title
} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import vCone from "../assets/img/bck/svg/bckVerticalCones.svg";
import hCone from "../assets/img/bck/svg/bckHorizonalCones.svg";
import BookServiceDialog from "../components/ScheduleDialog/BookServiceDialog";
import Link from "@material-ui/core/Link";
import {red} from "@material-ui/core/colors";

const style = theme => ({
    h1Container: {
        backgroundColor: theme.palette.secondary.main,
        padding: "2.5rem",
    },
    textBody:{
        maxWidth: "50vw",
        margin: "auto",
        paddingBottom: "2.5rem"
    },

    column: {
        flexBasis: '33.33%',
    },
    panel: {
        maxWidth: "50%",
        margin: "auto"
    },
    grid: {
        backgroundColor: "fff"
    },
    playExclaim: {
        fontSize: "0.85em"
    },
    playBrand: {
        color: theme.palette.primary.main
    },
    main_content: {
        position: "relative",
        zIndex: "2"
    },
    mainContentRaised: {
        margin: "auto",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    play_brand: {
        ...playBrand
    },
    clp_exclaim: {
        ...playBrand,
        fontSize: "0.85em"

    },
    section: {
        width: "100%",
        padding: "70px 0",
        textAlign: "center",
        backgroundColor: secondaryColor
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: primaryFontColor
    },
    verticalCones: {
        height:"20rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    horizontalCones: {
        width: "10rem",
    },
    classHeaders: {
        ...brandFont,
        color: "#555"
    },
    classSubHeaders: {
        color: "#606060",
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    subHeaderBar: {
        color: theme.palette.secondary.contrastText,
        margin: "auto",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto",
        },
        backgroundColor: theme.palette.secondary.main,
        ...mainElement,
        padding: "1rem",
        marginTop: "2.5rem",
        marginBottom: "2.5rem"
    },
    bookButton: {
        marginLeft: "30%"
    },
    msClass1: {
        marginLeft: "37%",
        marginTop: "1rem"
    },
    categoryHeaders: {
        color: theme.palette.primary.main,
        marginTop: "2.5rem"
    },
    links: {
        color: "#0645AD"
    },
    pricing:{
        marginTop: "-1rem",
        marginLeft: "2.5rem"
    },
    priceList: {
        marginTop: "0"
    },
    iframeWrapper: {
        margin: "2.5rem"
    },
    strike: {
        marginTop: "1rem",
        color: "#f00",
        textDecoration:"line-through"
    },
    strikeText: {
      color: "#333"
    },
    smallButton: {
        margin: "auto"

    },
    mainElement,
    brandFont
});
const useStyles = makeStyles(style);

export default function (props) {
    const classes = useStyles();
    const {} = props;
    return (
        <div>
            <Head>
                <title>Clay Classes & Encounters • Bozeman Community Kiln</title>
            </Head>
            <Layout>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                        LEARN.<span className={classes.playBrand}> PLAY</span><span className={classNames(classes.playExclaim, classes.playBrand)}>!</span>
                    </Typography>
                    <div className={classes.textBody}>
                        <Typography variant={"body1"} component={"p"} align={"center"}>
                            Thank you for being interested in our Classes and Encounters! We want to make ceramics,
                            pottery and clay an affordable, entertaining past time for everyone. Here is a quick
                            guide to help understand how our system works: Memberships keep us open and allow our
                            members to have access to the studio and equipment. Classes, on the other hand, directly
                            support local, working artists! During regular open studio hours, Ashleah and Heather
                            are available to meet the individualized needs of members. For more advanced ceramicists
                            and individuals that want access outside of these hours, we have memberships that grant
                            access to facilities up to 24/7. After hours, Artists rent the entire studio to teach
                            their own classes. Read on to find the option that speaks to you!
                        </Typography>
                    </div>
                </BrandedHeader>
                <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                    Youth Classes
                </Typography>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <Typography variant={"h5"} align={"center"}
                                    className={classNames(classes.classHeaders)}>
                            Bozeman Clay Kids
                        </Typography>
                        <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders}>
                            Thursdays 4:00pm-6:30pm<br/>
                            $200/ 8 week session
                        </Typography>
                    </GridItem>
                    <Hidden smDown>
                        <img src={vCone} alt={""} className={classes.verticalCones}/>
                    </Hidden>
                    <Hidden mdUp>
                        <img src={hCone} alt={""} className={classes.horizontalCones}/>
                    </Hidden>
                    <GridItem xs={12} sm={12} md={6}>
                        <ul>
                            <li><Typography variant={"body1"}>
                                Includes 15lbs of clay, studio glazes, firings, and shelving space
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Students are encouraged to plan their own projects, developing the skills which interest
                                them the most
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Students will receive instruction on techniques for hand-building as well as throwing
                                on a pottery wheel.
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Designed for students aged 8-17
                            </Typography></li>
                        </ul>
                        <Hidden smDown>
                            <div className={classes.bookButton}>
                                <BookServiceDialog apptType={"10494352"} buttonText={"Join Clay Kids"}/>
                            </div>
                        </Hidden>
                    </GridItem>
                </GridContainer>
                <Hidden mdUp>
                    <div className={classNames(classes.smallButton)}>
                        <BookServiceDialog apptType={"10494352"} buttonText={"Join Clay Kids"}/>
                    </div>
                </Hidden>
                <Hidden smDown>
                    <div className={classes.raisedDivider}/>
                </Hidden>
                <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                    Adult Classes
                </Typography>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <Typography variant={"h5"} align={"center"}
                                    className={classNames(classes.classHeaders)}>
                            Beginner Wheel Class
                        </Typography>
                        <Typography variant={"subtitle1"} align={"center"} component={"p"} className={classes.classSubHeaders}>
                            With: <a href={"/#"} className={classes.links}>Megan Sprenger</a> <br/>
                            Class: Tuesdays 6:30pm-9:30pm<br/>
                            Open Studio: Thursdays 7:00pm-10:00pm<br/>
                            Pricing starts at $55 / per class
                        </Typography>
                    </GridItem>
                    <Hidden smDown>
                        <img src={vCone} alt={""} className={classes.verticalCones}/>
                    </Hidden>
                    <Hidden mdUp>
                        <img src={hCone} alt={""} className={classes.horizontalCones}/>
                    </Hidden>
                    <GridItem xs={12} sm={12} md={6}>
                        <ul>
                            <li><Typography variant={"body1"}>
                                Level: Novice
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Concentrate on techniques to center clay, create volume, and build simple bowl and mug forms
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Learn trimming techniques, glazing practices, and gain knowledge on the clay firing process
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Clay Included!
                            </Typography></li>
                        </ul>
                        <div className={classes.pricing}>
                            <Typography variant={"h6"} color={"primary"} >
                                Pricing Options:
                            </Typography>
                        </div>
                        <ol className={classes.priceList}>
                            <li><Typography variant={"body1"} >
                                Intro Class: $55
                                <span className={classes.strike}>
                                    <span className={classes.strikeText}>(incl glazing and firing)</span>
                                </span>
                            </Typography></li>
                            <li><Typography variant={"body1"} >
                                3 Class bundle: $165 (incl glazing and firing)
                            </Typography></li>
                            <li><Typography variant={"body1"} >
                                6 Class bundle: $300 (incl glazing and firing)
                            </Typography></li>
                        </ol>
                        <Hidden smDown>
                            <div className={classes.bookButton}>
                                <BookServiceDialog apptType={"10782608"} buttonText={"Book Megan's Wheel Class"}/>
                            </div>
                        </Hidden>
                    </GridItem>
                </GridContainer>
                <Hidden mdUp>
                    <div className={classNames(classes.smallButton)}>
                        <BookServiceDialog apptType={"10782608"} buttonText={"Book Megan's Wheel Class"}/>
                    </div>
                </Hidden>
                <Hidden smDown>
                    <div className={classes.raisedDivider}/>
                </Hidden>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <Typography variant={"h5"} align={"center"}
                                    className={classNames(classes.classHeaders)}>
                            Beginner Hand Building Class
                        </Typography>
                        <Typography variant={"subtitle1"} align={"center"} component={"p"} className={classes.classSubHeaders}>
                            With: <a href={"/#"} className={classes.links}>Megan Sprenger</a> <br/>
                            Class: Thursdays 7:00pm-10:00pm<br/>
                            Open Studio: Tuesdays 6:30pm-9:30pm<br/>
                            Pricing starts at $55 / per class
                        </Typography>
                    </GridItem>
                    <Hidden smDown>
                        <img src={vCone} alt={""} className={classes.verticalCones}/>
                    </Hidden>
                    <Hidden mdUp>
                        <img src={hCone} alt={""} className={classes.horizontalCones}/>
                    </Hidden>
                    <GridItem xs={12} sm={12} md={6}>
                        <ul>
                            <li><Typography variant={"body1"}>
                                Level: Novice
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Learn to work with clay from start to finish using several pottery hand building techniques
                                like pinch, coil, slab and sculpting
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Work on individual projects in a fun and energetic environment!
                            </Typography></li>
                            <li><Typography variant={"body1"}>
                                Clay Included!
                            </Typography></li>
                        </ul>
                        <div className={classes.pricing}>
                            <Typography variant={"h6"} color={"primary"} >
                                Pricing Options:
                            </Typography>
                        </div>
                        <ol className={classes.priceList}>
                            <li><Typography variant={"body1"} >
                                Intro  Mug Class: $55 (incl glazing and firing)
                            </Typography></li>
                            <li><Typography variant={"body1"} >
                                6 Class bundle: $300 (incl glazing and firing)
                            </Typography></li>
                        </ol>
                        <Hidden smDown>
                            <div className={classes.bookButton}>
                                <BookServiceDialog apptType={"10906689"} buttonText={"Book Megan's Hand Building Class"}/>
                            </div>
                        </Hidden>
                    </GridItem>
                </GridContainer>
                <div id={"encounters"}>
                    <Hidden mdUp>
                        <div className={classNames(classes.smallButton)}>
                            <BookServiceDialog apptType={"10782608"} buttonText={"Book Megan's Hand Building Class"}/>
                        </div>
                    </Hidden>
                    <Hidden smDown>
                        <div className={classes.raisedDivider}/>
                    </Hidden>
                </div>
                <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                    Encounters
                </Typography>
                <Typography variant={"body1"} align={"center"} className={classes.textBody}>
                    Encounters are fun-centric events designed to bring our community together for a few hours and
                    create something that can be taken home and enjoyed. We add new encounters weekly, so check back often!
                </Typography>
                <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17880488&owner=17880488&appointmentType=category:Encounters"
                        width="100%"
                        height="800"
                        frameBorder="0"/>
            </Layout>
        </div>
    );
}
