import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Head from "next/head";
// Sections for this page
import CLPSection from "../pages-sections/Page-Sections/CLPSection.js";
import AboutSection from "../pages-sections/Page-Sections/AboutSection.js";
import Layout from "../pages-sections/Page-Sections/Layout";
// Styles
import imagesStyle from "../assets/jss/nextjs-material-kit/imagesStyles";
import {container} from "../assets/jss/nextjs-material-kit";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";


const style = theme => ({
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0"
    },
    container: {
        ...container,
        paddingTop: "1rem"

    },
    imagesStyle,

});
const useStyles = makeStyles(style);

export default function homePage(props) {
    const classes = useStyles();
    const {} = props;
    return (
        <div>
            <Head>
                <title>HOME • Bozeman Community Kiln</title>
            </Head>
            <Layout>
                <BrandedHeader>
                    <CLPSection/>
                </BrandedHeader>
                <AboutSection/>
            </Layout>
        </div>
    );
}
