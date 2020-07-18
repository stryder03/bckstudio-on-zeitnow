import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import {Hidden, Typography} from "@material-ui/core";
// Sections for this page
import Head from "next/head";
import Pricing from "../components/Pricing/Pricing";
import Layout from "../pages-sections/Page-Sections/Layout";
import {brandFont, clp_exclaim, dividerBar, mainElement, playBrand, title,} from "../assets/jss/nextjs-material-kit";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import {queryCMS} from "../Scripts/queryCMS";
import Container from "@material-ui/core/Container";
import gql from "graphql-tag";

const style = (theme) => ({
    whiteContainer:{
        backgroundColor: "#fff"
    },
    headerContainer2: {
        ...mainElement,
        padding: "1rem",
        backgroundColor: theme.palette.primary.main,
        marginTop: "0"
    },
    verticalCones: {
        height:"20rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    horizontalCones: {
        width: "10rem"
    },
    whiteHeader: {
        ...brandFont,
        color: theme.palette.primary.contrastText,
        textShadow: "1px 1px 1px #000000",
    },
    raisedDivider: {
        ...dividerBar,
        ...mainElement,
        marginTop: "0"
    },
    mainElement,
    title,
    brandFont,
    clp_exclaim,
    playBrand,
    dividerBar
});

const useStyles = makeStyles(style);

const membershipsQuery = gql`
    {
        membershipCategories{
            title
            membershipTiers{
                title
                price
                description
                buttonText
                buttonVariant
                inputValue
                term
            }
        }
    }`

export async function getStaticProps(context) {

    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = context.preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

    const membershipsQueryResult = await queryCMS(membershipsQuery, token, endPoint);

    return {
        props: {membershipsQueryResult}, // will be passed to the page component as props
    }
}

export default function MembershipPage(props) {
    const classes = useStyles();
    const { membershipsQueryResult } = props

    const priceLists = (categoriesList, maxWidth) => {
        let result = [];
        categoriesList.membershipCategories.map((category) => {
            result.push(<Pricing tierCategory={category} title={category.title} key={category.title} maxWidth={maxWidth}/>)
        })
        return result;
    };

    return (
        <div>
                <Head>
                    <title>Memberships • Bozeman Community Kiln</title>
                    <meta name="description"
                          content="Come Create with us. Pottery membership options to meet your skill and need to work with clay. Use our professional level pottery tools and equipment and earn discounts on classes and more."/>
                </Head>
            <div>
                <Layout>
                    <BrandedHeader>
                        <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                            CREATE.
                        </Typography>
                    </BrandedHeader>
                    <Hidden smDown>
                        <Container component="main" maxWidth={"lg"}>
                            {priceLists(membershipsQueryResult, "lg")}
                        </Container>
                    </Hidden>
                    <Hidden mdUp>
                        <Container component="main" maxWidth={"sm"}>
                            {priceLists(membershipsQueryResult, "sm")}
                        </Container>
                    </Hidden>
                </Layout>
            </div>
        </div>
    );
}
