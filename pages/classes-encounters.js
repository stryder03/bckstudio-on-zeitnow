import React from "react";
// core components
import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import classNames from "classnames";
import {
    brandFont,
    mainElement,
    playBrand,
    primaryFontColor,
    secondaryColor,
    title
} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import ClassList from "../components/ClassList/ClassList";

const style = (theme) => ({
    h1Container: {
        backgroundColor: theme.palette.secondary.main,
        padding: "2.5rem",
    },
    textBody: {
        maxWidth: "50vw",
        margin: "auto",
        paddingBottom: "2.5rem"
    },

    column: {
        flexBasis: "33.33%",
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
    links: {
        color: "#0645AD"
    },

    iframeWrapper: {
        margin: "2.5rem"
    },
    mainElement,
    brandFont
});
const useStyles = makeStyles(style);

export default function ClassesEncounters() {
    const classes = useStyles();

    const youthClasses = [{
        category: "Youth Classes",
        categoryList: [
            {
                title: "Bozeman Clay Kids",
                classInfo: {
                        subtitles: ["Thursdays 4:00pm-6:30pm", "$200/ 8 week session"]
                    },
                classDescription: [
                    "Includes 15lbs of clay, studio glazes, firings, and shelving space",
                    "Students are encouraged to plan their own projects, developing the skills which interest them the most",
                    "Students will receive instruction on techniques for hand-building as well as throwing on a pottery wheel",
                    "Designed for students aged 8-17"
                ],
                classID: "10494352",
                buttonText: "Join Clay Kids"
            },
            {
                title: "High School Clay",
                classInfo: {
                    instructor: "Megan Sprenger",
                    subtitles: ["Mondays 1:00pm-4:00pm","$200/ 8 week session"]
                },
                classDescription: [
                    "Includes 15lbs of clay, studio glazes, firings, and shelving space",
                    "Students will learn to create pottery using both hand-building techniques and the pottery wheel",
                    "We will explore the development of ideas for form and functionality and different decorative techniques",
                    "Designed to meet the needs of home school curriculum, but open to all high schoolers!"
                ],
                classID: "13180426",
                buttonText: "Join Highschool Clay"
            },
        ]
    }];

    const adultClasses = [{
        category: "Adult Classes",
        categoryList: [
            {
                title: "Beginner Wheel Class",
                classInfo: {
                    instructor: "Megan Sprenger",
                    subtitles: [
                        "Class: Tuesdays 6:30pm-9:30pm",
                        "Open Studio: Thursdays 7:00pm-10:00pm",
                        "$300 / 6 Week Session"
                    ],
                    pricing: {
                        title: "Pricing Options:",
                        priceList: [
                           "6 week session: $300 (incl glazing and firing)"
                        ]

                    }
                },
                classDescription: [
                    "Level: Novice",
                    "Concentrate on techniques to center clay, create volume, and build simple bowl and mug forms",
                    "Learn trimming techniques, glazing practices, and gain knowledge on the clay firing process",
                    "Clay Included!"
                ],
                classID: "10782608",
                buttonText: "Join Megan's Wheel Class"
            },
            {
                title: "Beginner Hand Building Class",
                classInfo: {
                    instructor: "Megan Sprenger",
                    subtitles: [
                        "Class: Thursdays 6:30pm-9:30pm",
                        "Open Studio: Tuesdays 6:30pm-9:30pm",
                        "$300 / 6 Week Session"
                    ],
                    pricing: {
                        title: "Pricing Options:",
                        priceList: [
                            "6 week session: $300 (incl glazing and firing)"
                        ]
                    }
                },
                classDescription: [
                    "Level: Novice",
                    "Learn to work with clay from start to finish using several pottery hand building techniques like pinch, coil, slab and sculpting",
                    "Work on individual projects in a fun and energetic environment!",
                    "Clay Included!"
                ],
                classID: "10906689",
                buttonText: "Join Megan's Hand Building Class"
            },

        ]
    }];

    return (
        <div>
            <Head>
                <title>Clay Classes & Encounters • Bozeman Community Kiln</title>
                <meta name="description"
                      content="Join us for one of our classes to learn a variety of pottery techniques from local artists, or try our clay encounters, a one-time visit great for playing with clay."/>
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
                            guide to help you understand how our system works: Memberships keep us open and allow our
                            members to have access to the studio and equipment. Classes, on the other hand, directly
                            support local, working artists! During regular open studio hours, Ashleah and Heather
                            are available to meet the individualized needs of members. For more advanced ceramicists
                            and individuals that want access outside of these hours, we have memberships that grant
                            access to facilities up to 24/7. After hours, Artists rent the entire studio to teach
                            their own classes. Read on to find the option that speaks to you!
                        </Typography>
                    </div>
                </BrandedHeader>
                <ClassList classList={youthClasses}/>
                <ClassList classList={adultClasses}/>
                <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders} id={"play"}
                            name={"play"}>
                    Encounters
                </Typography>
                <Typography variant={"body1"} align={"center"} className={classes.textBody}>
                    Encounters are fun-centric events designed to bring our community together for a few hours and
                    create something that can be taken home and enjoyed. We add new encounters weekly, so check back
                    often!
                </Typography>
                <iframe
                    src="https://app.acuityscheduling.com/schedule.php?owner=17880488&owner=17880488&appointmentType=category:Encounters"
                    width="100%"
                    height="800"
                    frameBorder="0"/>
            </Layout>
        </div>
    );
}
