import React from "react";
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomButtons from "../../components/CustomButtons/Button"
import Link from "next/link"
// Style
import {brandFont, playBrand} from "../../assets/jss/nextjs-material-kit";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";

const style = (theme) => ({
  clp_exclaim: {
    ...playBrand,
    fontSize: "0.85em"

  },
  clpButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  gridContainer: {
    padding: "2.5rem 0"
  },
  upper: {
    textTransform: "uppercase"
  },
  brandFont,
  playBrand
});
const useStyles = makeStyles(style);

export default function CLPSection() {
  const classes = useStyles();
  return (
      <div>
        <GridContainer justify="center">
        </GridContainer>
        <GridContainer alignItems={"flex-start"} className={classes.gridContainer}>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} component={"h2"} className={classes.brandFont}>CREATE.</Typography>
            <Typography variant={"h6"} component={"h3"} className={classes.upper}>Memberships</Typography>
            <Typography variant={"body1"} align={"center"} justify={"center"}>
              Join our clay family!
              Choose from different levels of studio access to meet your needs.
            </Typography>
            <Hidden mdUp>
              <Link href={"/memberships"}>
                <CustomButtons className={classes.clpButton}>
                  Come Create
                </CustomButtons>
            </Link>
            </Hidden>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} component={"h2"} className={classes.brandFont}>LEARN.</Typography>
            <Typography variant={"h6"} component={"h3"} className={classes.upper}>Clay Classes</Typography>
            <Typography variant={"body1"} align={"center"} justify={"center"}>
              Not sure if diving into membership is for you? Try a class and support local artists!
            </Typography>
            <Hidden mdUp>
              <Link href={"/classes-encounters"} passHref>
                <CustomButtons className={classes.clpButton} variantType={"outlined"}>
                  Come Learn
                </CustomButtons>
            </Link>
            </Hidden>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} component={"h2"} className={classes.brandFont}><span
                className={classes.playBrand}>PLAY</span><span
                className={classNames(classes.playBrand, classes.clp_exclaim)}>!</span></Typography>
            <Typography variant={"h6"} component={"h3"} className={classes.upper}>Clay Encounters</Typography>
            <Typography variant={"body1"} align={"center"} justify={"center"}>
              Join us for a clay encounter. We have a variety to choose from every month!
            </Typography>
            <Hidden mdUp>
              <Link href={"/classes-encounters#play"} passHref>
                <CustomButtons className={classes.clpButton}>
                  Come Play
                </CustomButtons>
            </Link>
            </Hidden>
          </GridItem>
          <Hidden smDown>
            <GridItem md={12}>
              <GridContainer alignItems={"space-between"}>
                <GridItem md={3}>
                  <Link href={"/memberships"}>
                    <CustomButtons className={classes.clpButton}>
                      Come Create
                    </CustomButtons>
                  </Link>
                </GridItem>
                <GridItem md={3}>
                  <Link href={"/classes-encounters"} passHref>
                    <CustomButtons className={classes.clpButton} variantType={"outlined"}>
                      Come Learn
                    </CustomButtons>
                  </Link>
                </GridItem>
                <GridItem md={3}>
                  <Link href={"classes-encounters/#play"} passHref>
                    <CustomButtons className={classes.clpButton}>
                      Come Play
                    </CustomButtons>
                  </Link>
                </GridItem>
              </GridContainer>
            </GridItem>
          </Hidden>
        </GridContainer>
    </div>
  )
}
