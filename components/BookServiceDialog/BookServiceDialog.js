import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import {Close} from "@material-ui/icons";
// core components
import {container} from "assets/jss/nextjs-material-kit.js";
import {Dialog, DialogContent, DialogTitle, Fade, IconButton, Toolbar} from "@material-ui/core";
import CustomButtons from "../CustomButtons/Button";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle"
import Typography from "@material-ui/core/Typography";
import AcuityScheduler from "../../pages-sections/Page-Sections/AcuityScheduler";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(theme => ({
    ...styles,
    ...container,
    dialog: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    bookButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginLeft: "1rem",
        marginTop: "0",
        [theme.breakpoints.down("md")]: {
            marginTop: "auto"
        },
    },
    title:{
        flex: 1,
        fontWeight: "700",
        textAlign: "center",
    },
    dialogButton: {
        position: "absolute",
    },
    buttonText:{
        margin:"auto",
    },
    navText: {
        fontWeight: "700"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

export default function BookServiceDialog(props) {
    const classes = useStyles();
    const { buttonText, apptType} = props;
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <CustomButtons
                aria-label={"book service"}
                className={classNames(classes.navLink,classes.bookButton)}
                id={"book-header"}
                onClick={handleToggle}
            >
                <div className={classes.buttonText}>
                    <Typography variant={"body1"} className={classes.navText}>{buttonText}</Typography>
                </div>
            </CustomButtons>
            <Dialog fullScreen open={open} onBackdropClick={handleClose} TransitionComponent={Transition}>
                <DialogTitle className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Close />
                        </IconButton>
                        <Typography variant="h5" className={classes.title} align={"center"}>
                            Let&apos;s Get You Booked
                        </Typography>
                    </Toolbar>
                </DialogTitle>
                <DialogContent>
                    <GridContainer align={"center"}>
                        <GridItem xs={12}>
                            <AcuityScheduler apptType={apptType}/>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </div>
    )
}
