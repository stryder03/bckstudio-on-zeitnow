/*eslint-disable*/
import React from "react";

import classNames from "classnames"
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Hidden} from "@material-ui/core";
// @material-ui/icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// core components
import Button from "../CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import {primaryColor} from "../../assets/jss/nextjs-material-kit";
import BookServiceDialog from "../ScheduleDialog/BookServiceDialog";

const style = theme => ({
    ...styles,
    bookButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginLeft: "1rem",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});


const useStyles = makeStyles(style);

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
      <div>
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
              href={"/home"}
              color="transparent"
              className={classes.navLink}
              >
              <HomeOutlinedIcon className={classes.icons}/> Home
          </Button>
      </ListItem>
      <ListItem className={classes.listItem} color={primaryColor}>
        <Button
          href="/memberships"
          color="transparent"
          className={classes.navLink}
        >Memberships
        </Button>
      </ListItem>
        <ListItem className={classes.listItem} color={primaryColor}>
            <Button
                href="/classes-encounters"
                color="transparent"
                className={classes.navLink}
            >Classes & Encounters
            </Button>
        </ListItem>
        <ListItem className={classes.listItem} color={primaryColor}>
            <Button
                href="/studios"
                color="transparent"
                className={classes.navLink}
            >Studio Rentals
            </Button>
        </ListItem>
        <ListItem className={classes.listItem} color={primaryColor}>
            <Button
                href="/contact"
                color="transparent"
                className={classes.navLink}
            >Contact
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Hidden smDown>
                <BookServiceDialog buttonText={"Book Now"} className={classNames(classes.navLink)}/>
            </Hidden>
        </ListItem>
    </List>
      </div>
  );
}
