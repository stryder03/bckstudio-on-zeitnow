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
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import Link from "next/link";

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
      <nav role="navigation">
          <List className={classes.list}>
              <ListItem className={classes.listItem}>
                  <Link href={"/"} passHref>
                      <Button
                          color="transparent"
                          className={classes.navLink}
                      >
                          <HomeOutlinedIcon className={classes.icons}/> Home
                      </Button>
                  </Link>
              </ListItem>
              <ListItem className={classes.listItem} color={primaryColor}>
                  <Link href={"/memberships"} passHref>
                      <Button
                          color="transparent"
                          className={classes.navLink}
                      >Memberships
                      </Button>
                  </Link>
              </ListItem>
              <ListItem className={classes.listItem} color={primaryColor}>
                  <Link href={"/classes-encounters"} passHref>
                      <Button
                          color="transparent"
                          className={classes.navLink}
                      >Classes & Encounters
                      </Button>
                  </Link>
              </ListItem>
              <ListItem className={classes.listItem} color={primaryColor}>
                  <Link href={"/studios"} passHref>
                      <Button
                          color="transparent"
                          className={classes.navLink}
                      >Studio Rentals
                      </Button>
                  </Link>
              </ListItem>
              <ListItem className={classes.listItem} color={primaryColor}>
                  <Link href={"/contact"} passHref>
                      <Button
                          color="transparent"
                          className={classes.navLink}
                      >Contact
                      </Button>
                  </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                  <Hidden smDown>
                      <BookServiceDialog buttonText={"Book Now"} className={classNames(classes.navLink)}/>
                  </Hidden>
              </ListItem>
          </List>
      </nav>
  );
}
