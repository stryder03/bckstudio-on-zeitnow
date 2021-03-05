import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Typography from "@material-ui/core/Typography";
import Card from "../Card/Card";
import Image from "next/image";
// @ts-ignore
import hCones from "../../assets/img/bck/svg/bckHorizonalCones.svg";
import CardBody from "../Card/CardBody";
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import { BioCard } from "../../index";
import imagesStyles from "../../assets/jss/nextjs-material-kit/imagesStyles";
import { cardTitle } from "../../assets/jss/nextjs-material-kit";


// @ts-ignore
const useStyles = makeStyles(() => ({
    ...imagesStyles,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle,
    smallTitle: {
        color: "#6c757d",
    },

}));


export default function BioCard(props: BioCard) {
    const classes = useStyles();
    const {person} = props

    const width = 258
    const height = 336
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
        classes.imgSmall
    );
    const coneImgClasses = classNames(
        classes.imgSmall
    );

    return (
        <React.Fragment>
            <GridContainer alignItems={"flex-start"} justify={"center"}>
                <GridItem xs={12} sm={12} md={6}>
                    <Card plain>
                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                            <Image src={person.staffPicture.url} width={width} height={height} alt={person.staffPicture.altText} title={person.staffPicture.title} className={imageClasses} />
                        </GridItem>
                        <h4 className={classes.cardTitle}>
                            {person.firstName} {person.lastName}
                            <br />
                            <small className={classes.smallTitle}>person.staffTitle</small>
                        </h4>
                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                            <img src={hCones} alt={""} className={coneImgClasses}/>
                        </GridItem>
                        <CardBody>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls={person.firstName + "-" + person.lastName + "-bio-content"}
                                    id={person.firstName + "-" + person.lastName + "-bio-header"}
                                >
                                    <h4 className={classNames(classes.cardTitle)}>Learn about {person.firstName}</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant={"body1"} align={"right"}>
                                        {person.staffBio}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </React.Fragment>
    );
}
