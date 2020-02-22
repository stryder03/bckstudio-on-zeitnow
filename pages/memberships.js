import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import {Typography} from "@material-ui/core";
// Sections for this page
import Head from "next/head";
import Pricing from "../components/Pricing/Pricing";
import Layout from "../pages-sections/Page-Sections/Layout";
import {brandFont, clp_exclaim, dividerBar, mainElement, playBrand, title,} from "../assets/jss/nextjs-material-kit";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";

const style = theme => ({
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
    categoryHeaders: {
        color: theme.palette.primary.main,
        marginTop: "2.5rem"
    },
    mainElement,
    title,
    brandFont,
    clp_exclaim,
    playBrand,
    dividerBar
});

const useStyles = makeStyles(style);

export default function MembershipPage() {
    const classes = useStyles();

    const memberTiers = [
        {
            title: 'Casual Pass',
            price: '120',
            description: ['10 studio sessions included', 'Good for 3 months', 'Use for yourself OR a guest', '15lb of Clay', 'Studio Glazes', 'Kiln Firings', 'Community Shelf Space'],
            buttonText: 'Buy a Pass',
            buttonVariant: 'outlined',
            inputValue: "FKFE3BSB82ZSS",
            term: 'pass'
        },
        {
            title: 'Standard',
            price: '120',
            description: [
                'Full Access during Business Hours',
                '25lb Clay',
                'Studio Glazes',
                'Kiln Firings',
                'Personal Shelf Space',
                'Discounts on Tools, Clay, After Hours Classes',
                'Early Registration for Classes and Special Events',
                'Opportunity to display work in our Gallery'

            ],
            buttonText: 'Buy Standard',
            buttonVariant: 'contained',
            inputValue: "SNRKVF7FLC4US",
            term: 'mo'
        },
        {
            title: 'Premium',
            price: '260',
            description: [
                '24/7 Studio Access',
                '25lb Clay',
                'Studio Glazes',
                'Kiln Firings',
                'Personal Shelf Space',
                'Discounts on Tools, Clay, After Hours Classes',
                'Early Registration for Classes and Special Events',
                'Opportunity to display work in our Gallery',
                'Special Discounts to give to friends and family'
            ],
            buttonText: 'Buy Premium',
            buttonVariant: 'outlined',
            inputValue: "T2Q8D3PZQFQJU",
            term: 'mo'
        },
    ];

    const familyTier = [{
        title: 'Family',
        price: '350',
        description: [
            '2 Adult Memberships for  Artists aged 15+',
            'Full Access during Business Hours',
            '25lb Clay',
            'Studio Glazes',
            'Kiln Firings',
            'Personal Shelf Space',
            'Discounts on Tools, Clay, After Hours Classes',
            'Early Registration for Classes and Special Events',
            'Opportunity to display work in our Gallery',
            '3 vouchers for Clay Kids',

        ],
        buttonText: 'Buy Family',
        buttonVariant: 'contained',
        inputValue: "N48DNJFPZ94HN",
        term: 'mo'
    },];
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
                    <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                        Individual Memberships
                    </Typography>
                    <Pricing tiers={memberTiers}/>
                    <div className={classNames(classes.main_content, classes.mainContentRaised)}>
                    <div className={classes.headerContainer}>
                        <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                            Family Membership
                        </Typography>
                        </div>
                    </div>
                    <Pricing tiers={familyTier} />
                </Layout>
            </div>
        </div>
    );
}
