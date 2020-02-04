import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import fbIcon from "../../assets/img/bck/Asset-4.png";
import igIcon from "../../assets/img/bck/Asset-5.png";
import React from "react";

import style from "../../assets/jss/nextjs-material-kit/components/socialMediaInfoStyles";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(style);

export default function SocialMediaInfo(props) {
    const {} = props;
    const classes = useStyles();

    return (
        <div className={classNames(classes.container)}>
            <Typography variant={"h4"} className={classNames(classes.title)}>Find the Latest on Social Media</Typography>
            <GridContainer spacing={0}>
                <GridItem xs={2} sm={2} md={1}>
                    <a href={"https://www.facebook.com/BozemanCommunityKiln"} rel="noopener noreferrer" target={"_blank"}>
                        <img src={fbIcon} alt={"Follow on Facebook"} className={classes.icon}/>
                    </a>
                </GridItem>
                <GridItem xs={2} sm={2} md={1}>
                    <a href={"https://www.instagram.com/bckiln/"} rel="noopener noreferrer" target={"_blank"}>
                        <img src={igIcon} alt={"Follow on Instagram"} className={classes.icon}/>
                    </a>
                </GridItem>
            </GridContainer>
        </div>
    )
}

