import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles";
// Sections for this page
import {Hidden, Typography} from "@material-ui/core";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
// Images
import vCone from "src/assets/img/bck/svg/bckVerticalCones.svg"
import hCone from "src/assets/img/bck/svg/bckHorizonalCones.svg"

import {
    brandFont,
    clp_exclaim,
    container,
    dividerBar,
    mainElement,
    playBrand,
    title
} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";

const style = (theme) => ({
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
    headerContainer2: {
        padding: "1rem",
        backgroundColor: theme.palette.secondary.main,
        marginTop: "0",
        marginBottom: "2rem"
    },
    container: {
        ...container,
        paddingTop: "1rem"
    },
    main_content: {
        position: "relative",
        zIndex: "2",
        paddingBottom: "1rem"
    },
    mainContentRaised: {
        margin: "auto",
    },
    whiteContainer:{
        backgroundColor: "#fff"
    },
    headerContainer: {
        padding: "2.5rem",

    },
    verticalCones: {
        height:"20rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    horizontalCones: {
        width: "10rem",
    },
    whiteHeader: {
        ...brandFont,
        color: theme.palette.primary.contrastText,
        textShadow: "1px 1px 1px #000000",
    },
    rentalHeaders: {
        ...brandFont,
        color: "#555"
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    title,
    clp_exclaim,
    playBrand,
    dividerBar,
    brandFont
});
const useStyles = makeStyles(style);

export default function StudiosPage() {
    const classes = useStyles();
    return (
            <div>
                <Head>
                    <title>Studio Rentals • Bozeman Community Kiln</title>
                    <meta name="description"
                          content=" The Bozeman area's resource for Ceramic Artists. Semi-private and private ceramics studio rentals, and studio use for teaching classes and creating personal income available."/>
                </Head>
                <Layout>
                    <div>
                        <BrandedHeader>
                            <Typography variant={"h1"} align={"center"} className={classes.brandFont}>
                                WELCOMING <span className={classes.playBrand}>STUDIO ARTISTS</span>
                            </Typography>
                        </BrandedHeader>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <Typography variant={"h5"} align={"center"}
                                                    className={classNames(classes.rentalHeaders)}>
                                            SEMI-PRIVATE<br/>
                                            STUDIO RENTAL
                                        </Typography>
                                        <Typography variant={"h6"} align={"center"}>
                                            $450/month
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
                                            <li><Typography variant={"body1"}>Your studio includes a work table and an
                                                entire shelving unit.</Typography></li>
                                            <li><Typography variant={"body1"}>Space for your own wheel or you can use one of
                                                ours.</Typography></li>
                                            <li><Typography variant={"body1"}>24 hours access to the facility and equipment,
                                                all we ask is to be respectful to the classes.</Typography></li>
                                            <li><Typography variant={"body1"}>Free reclaimed clay and Studio
                                                glazes.</Typography></li>
                                            <li><Typography variant={"body1"}>Kiln firings for non-production firings(We can
                                                talk about production firings).</Typography></li>
                                            <li><Typography variant={"body1"}>Discounts on studio purchases through our
                                                shop.</Typography></li>
                                            <li><Typography variant={"body1"}>Display space in our studio
                                                gallery.</Typography></li>
                                            <li><Typography variant={"body1"}>Your artwork featured through our social media
                                                and advertising campaigns</Typography></li>
                                        </ul>
                                    </GridItem>
                                </GridContainer>
                                <div className={classes.raisedDivider}/>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <Typography variant={"h5"} align={"center"}
                                                    className={classNames(classes.rentalHeaders)}>
                                            PRIVATE<br/>
                                            STUDIO RENTAL
                                        </Typography>
                                        <Typography variant={"h6"} component={"p"} align={"center"}>
                                            $550/month
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
                                            <li><Typography variant={"body1"}>Your studio is a private room with table,
                                                shelving and plenty of room for tools and materials</Typography></li>
                                            <li><Typography variant={"body1"}>Space for your own wheel or you can use one of
                                                ours.</Typography></li>
                                            <li><Typography variant={"body1"}>24 hours access to the facility and equipment,
                                                all we ask is to be respectful to the classes.</Typography></li>
                                            <li><Typography variant={"body1"}>Free reclaimed clay and studio
                                                glazes.</Typography></li>
                                            <li><Typography variant={"body1"}>Kiln use for non-production firings(We can
                                                talk about production firings).</Typography></li>
                                            <li><Typography variant={"body1"}>Discounts on studio purchases through our
                                                shop.</Typography></li>
                                            <li><Typography variant={"body1"}>Display space in our studio
                                                gallery.</Typography></li>
                                            <li><Typography variant={"body1"}>Your artwork featured through our social media
                                                and advertising campaigns</Typography></li>
                                        </ul>
                                    </GridItem>
                                </GridContainer>
                                    <Typography variant={"h5"} align={"center"} className={classes.subHeaderBar}>
                                        NEED SPACE TO TEACH YOUR OWN CLASSES?
                                    </Typography>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <Typography variant={"h5"} align={"center"}
                                                    className={classNames(classes.rentalHeaders)}>
                                            BCK Independent Instructors
                                        </Typography>
                                        <Typography variant={"h6"} component={"p"} align={"center"}>
                                            Help Build our Community
                                        </Typography>
                                    </GridItem>
                                    <Hidden smDown>
                                        <img src={vCone} alt={""} className={classes.verticalCones}/>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <img src={hCone} alt={""} className={classes.horizontalCones}/>
                                    </Hidden>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <Typography variant={"body1"}>
                                            <br/>
                                            Your income, your students, your schedule, our equipment. Starting to teach
                                            a regular pottery class can be expensive! We&apos;ve got you covered though. You will
                                            have access to the studio outside of normal hours, the freedom to design and
                                            teach classes that interest you, and the use of a studio, equipment, and glazes
                                            that can support class sizes of up to 20 students.
                                        </Typography>
                                    </GridItem>
                                </GridContainer>
                        </div>
                </Layout>
            </div>
    );
}
