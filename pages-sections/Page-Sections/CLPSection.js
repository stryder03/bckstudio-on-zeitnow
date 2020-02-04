import React from "react";
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomButtons from "../../components/CustomButtons/Button"
// Style
import {brandFont, playBrand} from "../../assets/jss/nextjs-material-kit";
import Typography from "@material-ui/core/Typography";

const style = theme => ({
  clp_exclaim: {
    ...playBrand,
    fontSize: "0.85em"

  },
  clpButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  shortColumn: {
    marginTop: "1.9rem"
  },
  brandFont,
  playBrand
});
const useStyles = makeStyles(style);

export default function CLPSection(props) {
  const classes = useStyles();
  return (
      <div>
        <GridContainer justify="center">
        </GridContainer>
        <GridContainer alignItems={"flex-start"}>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} className={classes.brandFont}>CREATE.</Typography>
            <Typography variant={"body1"} align={"center"} justify={"center"}>
              The experience of working in a studio filled with unique individuals at different experience levels fosters broader learning opportunities and lasting friendships.
              Bozeman Community Kiln invites you to join our clay family and create a community of artistic, clay loving, ceramic enthusiasts!
              Our members enjoy access to a relaxed and collaborative studio with an atmosphere where they can be inspired to make their own projects at their own pace.
              We have different options available for meeting your financial needs.
            </Typography>
            <CustomButtons href={"/memberships"} className={classes.clpButton}> Come Create</CustomButtons>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} className={classes.brandFont}>LEARN.</Typography>
            <Typography variant={"body1"} align={"center"} justify={"center"}>
              Classes directly support local, working artists! During regular open studio hours, Ashleah and Heather are
              available to meet the individualized needs with private, member and kid's classes. After hours, we rent
              the entire studio out to local artists who use our studio to teach their own classes. Not sure if diving
              into membership is for you? We have classes for a variety of techniques including wheel throwing, sculpting and slab building.
              Try a class and support local ceramic artists
            </Typography>
            <CustomButtons href={"/clay-encounters"} className={classNames(classes.clpButton, classes.shortColumn)}> Come Learn</CustomButtons>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} className={classes.brandFont}><span className={classes.playBrand}>PLAY</span><span
                className={classNames(classes.playBrand, classes.clp_exclaim)}>!</span></Typography>
            <Typography variant={"body1"} align={"center"} justify={"center"}>
              From a unique creative personal or family outlet, to a great first date creating ceramic pottery is a
              perfect form of entertainment. Sculptures or cups, a vase or a platter, ball of clay to muddy mess,
              Bozeman Community Kiln will teach you to use clay to create fun, unique, and sometimes functional works
              of art. Or just come in to mess around! Our mission is to reconnect our community with the rich history
              clay and ceramics play in Montana. Join us for a clay encounter, we have a variety to choose from every
              month!
            </Typography>
            <CustomButtons href={"/clay-encounters"} className={classes.clpButton}> Come Play</CustomButtons>
          </GridItem>
        </GridContainer>
    </div>
  )
};
