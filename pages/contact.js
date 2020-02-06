import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import {TextareaAutosize, TextField, Typography} from "@material-ui/core";
// Sections for this page
import Head from "next/head";
import Layout from "../pages-sections/Page-Sections/Layout";
import {brandFont, clp_exclaim, dividerBar, mainElement, playBrand, title, container} from "../assets/jss/nextjs-material-kit";
import MainContent from "../components/MainContent/MainContent";
import { useForm } from "react-hook-form";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import GridContainer from "../components/Grid/GridContainer";
import ContactForm from "../components/ContactForm/ContactForm";

const style = theme => ({
    brandFont,
    clp_exclaim,
    dividerBar,
    mainElement,
    playBrand,
    title,
    container: {
        ...container,
        textAlign: "center",
        marginTop: "2.5rem",
        paddingBottom: "2.5rem"
    },
    phone: {
        fontSize: "2.5rem",
        color: "#333",
        "&:hover": {
            color: theme.palette.primary.main
        }
    }
});

const useStyles = makeStyles(style);

export default function ContactPage(props) {
    const classes = useStyles();
    const {} = props;

    return (
        <div>
            <Head>
                <title>CONTACT US • Bozeman Community Kiln</title>
            </Head>
            <Layout>
                <MainContent>
                    Reach Out to Us
                </MainContent>
                <GridContainer alignItems={"flex-start"} className={classes.container} justify={"space-evenly"}>
                    <GridItem xs={12} sm={12} md={4}>
                        <ContactForm formTitle={"Email"}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Typography variant={"h3"} color={"primary"}>
                            Visit
                        </Typography>
                        <iframe width="450" height="450" frameBorder="0" style={{border:0}}
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrb7LA0RJRVMRLThXYkgPKbk&key=AIzaSyAKH01Pc_8dn9Dn_2vfr6p_NsHKbEYlW6I"
                                allowFullScreen/>
                    </GridItem>
                    <GridItem xs={12}>
                        <Typography variant={"h3"} color={"primary"} align={"center"}>
                            Call
                        </Typography>
                        <Typography variant={"body1"} align={"center"}>
                            <a href="tel:+14062249229" className={classes.phone}>(406)224-9229</a>
                        </Typography>
                    </GridItem>
                </GridContainer>
            </Layout>
        </div>
    )
}
