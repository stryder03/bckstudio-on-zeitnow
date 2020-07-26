import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import ale from "../../assets/img/faces/ale_01.jpeg";
import hbh from "../../assets/img/faces/hbh_01.jpeg";
import hCones from "../../assets/img/bck/svg/bckHorizonalCones.svg";
import Typography from "@material-ui/core/Typography";
import {cardTitle, title} from "../../assets/jss/nextjs-material-kit";
import imagesStyle from "../../assets/jss/nextjs-material-kit/imagesStyles";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const style = ({
  inlineType: {
    display: "inline"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#444"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "2.563rem",
    fontSize: "1.25",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  leftAlignText: {
    textAlign: "left !important"
  },
  rightAlignText: {
    textAlign: "right !important",
    paddingBottom: "3.05rem"
  },
  expandText: {
    margin: "5rem"
  }

});
const useStyles = makeStyles(style);


export default function AboutSection() {
  const classes = useStyles();
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
    <div className={classes.section}>
      <Typography variant={"h3"} className={classes.title}>ABOUT BOZEMAN COMMUNITY KILN</Typography>
        <GridContainer alignItems={"flex-start"}>
          <GridItem xs={12} sm={12} md={8}>
            <Typography variant={"body1"}>
              Bozeman Community Kiln invites you to come create, learn, and play with ceramic clay. Members enjoy a relaxed,
              and collaborative atmosphere where they can be inspired to make their own projects at their own pace. The
              experience of working in a studio, filled with unique individuals at different experience levels, fosters
              broader learning opportunities and lasting friendships. Artistic expression offers a creative outlet through
              both sculpting and decorating of each unique clay form you create. From your creative outlet to a great first
              date, creating ceramic pottery is a perfect form of entertainment. From sculpture to cup, vase to platter,
              Bozeman Community Kiln will teach you to use clay to throw your personal portfolio to the next level. Our
              mission is to connect locals with the rich clay history and ceramic community that Montana boasts, and share
              that history with our visitors.
            </Typography>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ale} alt="Studio Director" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ashleah Elias
                <br />
                <small className={classes.smallTitle}>Studio Director</small>
              </h4>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hCones} alt={""} className={coneImgClasses}/>
              </GridItem>
              <CardBody>
                <Accordion>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon/>}
                      aria-controls="ashleah-elias-bio-content"
                      id="ashleah-elias-bio-header"
                  >
                    <h4 className={classNames(classes.cardTitle)}>Learn about Ashleah</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant={"body1"} align={"right"}>
                      Ashleah moved to Bozeman in 2014 with her family after her husband of 13 years was medically
                      retired
                      from the USMC. Drawn to the area for its supportive veteran community and Montana State
                      University,
                      Ashleah has discovered a passion for other military families and the greater Bozeman community.
                      Prior to moving here, Ashleah spent 10 years working as a nurse and, before returning to
                      university,
                      she spent half a year managing a busy rural health clinic in California. Her experience as a nurse
                      has
                      given her strong skills in communication and teaching, which she has since put to use teaching private
                      ceramics lessons in her own home studio. Ashleah has been privileged to demonstrate pottery-teaching
                      techniques at MSU and spent time in the summer of 2018 teaching ceramics for MSU’s Peaks and Potential
                      summer camp. While pursuing her Bachelor of Fine Arts, Ashleah spent a semester as an intern, where she
                      taught hand-building techniques to residents of Liberty Place who are recovering from Traumatic Brain
                      Injuries. Her leadership, communication skills, and artistic abilities are the driving force behind
                      Bozeman Community Kiln.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hbh} alt="Director of Operations" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Heather Hodapp
                <br />
                <small className={classes.smallTitle}>Director of Operations</small>
              </h4>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hCones} alt={""} className={coneImgClasses}/>
              </GridItem>
              <CardBody>
                <Accordion>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon/>}
                      aria-controls="heather-hodapp-bio-content"
                      id="heather-hodapp-bio-header"
                  >
                    <h4 className={classNames(classes.cardTitle)}>Learn about Heather</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant={"body1"} align={"left"}>
                      Attracted by the veteran community in Bozeman as well as her military family connections with
                      Ashleah,
                      Heather and her family moved to Bozeman in 2017. For seven years prior to that move, Heather
                      supported
                      her husband’s military career as stay at home mother for their 3 boys. Upon her husband’s medical
                      retirement, Heather rejoined the work force seeking challenge and achievement in the unfamiliar
                      field
                      of retail, as a seasonal part-time employee. Her outstanding strengths in organization,
                      communication,
                  and leadership, as well as her natural talent for merchandising, led to Heather being promoted from a
                  seasonal part-time employee to the General Manager in only one year. During her time as General Manager
                  Heather organized the complicated execution of a pop-up Halloween City through to its completion at the
                  end of the season. Heather continued to build merchandising and managerial experience through her work
                  in retail after their move to Bozeman. Jumping into the thriving artistic background of the community,
                  Heather Joined Ashleah in farmers market sales during the summer of 2018 and developed a keen interest
                  in ceramics. Her organization, sales, logistics and managerial experience are the foundation on which
                  Bozeman Community Kiln operates.
                </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    </div>
  );
}
