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
import {queryCMS} from "../Scripts/queryCMS";

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

const classQuery =
    `{ 
         classes(where: {displayInClassesView: true}  orderBy: displayOrder_ASC){
              displayInClassesView
              classCategory
              className
              displayTitle
              instructor {  
                  firstName
                  lastName
                  headshotImage {
                      url
                  }
                  bio {
                      text
                  }
                  instructorStatement {
                      text
                  }
              }
              classLink
              buttonText
              disableBookingButton
              classDescriptionList
              classInfoList          
         }  
    }`;

const instructorQuery =
    `{  
        instructor(where: {defaultInstructor: true}){
            firstName
            lastName
            headshotImage {
                url
            }
            bio {
                text
            }
            instructorStatement {
                text
            }
        }       
    }`;

const formClassList = (classList) => {
        const result = {categories: []};
        classList.classes.map((course) => {
            course.classCategory = course.classCategory.replace("_", " ");
            result.categories[course.classCategory] ? result.categories[course.classCategory].categoryClasses.push(course) : result.categories[course.classCategory]= {categoryClasses: [course]};
        });

        return result;
};

export async function getStaticProps(context) {

    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = context.preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;

    const classListQueryResult = await queryCMS(classQuery, token);
    const defaultInstructor = await queryCMS(instructorQuery, prodToken);

    return {
        props: { classListQueryResult, defaultInstructor }, // will be passed to the page component as props
    }
}

export default function ClassesEncounters(props) {
    const classes = useStyles();
    const { classListQueryResult, defaultInstructor } = props;

    const classData = formClassList(classListQueryResult);

    const classLists = (classList) => {

        let result = [];
        for (let key in classList.categories) {
            if (Object.prototype.hasOwnProperty.call(classList.categories, key)) {
                result.push(<ClassList classList={classList.categories[key]} key={key} title={key} defaultInstructor={defaultInstructor}/>)
            }
        }
        return result
    };

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
                {classLists(classData)}
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
