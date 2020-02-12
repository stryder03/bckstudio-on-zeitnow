import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import {Close} from "@material-ui/icons";
// core components
import {container} from "assets/jss/nextjs-material-kit.js";
import {Dialog, DialogContent, DialogTitle, Fade, IconButton, Toolbar} from "@material-ui/core";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle"
import Typography from "@material-ui/core/Typography";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import msImg from "assets/img/ms-thumb-10782608optimize.jpg"
import {dividerBar, mainElement} from "assets/jss/nextjs-material-kit";
import Button from "@material-ui/core/Button";

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
    title: {
        flex: 1,
        fontWeight: "700",
        textAlign: "center",
    },
    dialogButton: {
        position: "absolute",
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    bioImg: {
        margin: "1.5rem"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

export default function BioDialogMS(props) {
    const classes = useStyles();
    const {} = props;
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Button variant={"outlined"} onClick={handleToggle} color={"primary"}>
                Megan Sprenger
            </Button>
            <Dialog open={open} onBackdropClick={handleClose} TransitionComponent={Transition}
                    className={classes.container}>
                <DialogTitle className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Close/>
                        </IconButton>
                        <Typography variant="h5" className={classes.title} align={"center"}>
                            Meet Megan Sprenger
                        </Typography>
                    </Toolbar>
                </DialogTitle>
                <DialogContent>
                    <GridContainer align={"center"}>
                        <GridItem xs={12} md={12}>
                            <img src={msImg} alt={"Megan Sprenger"} className={classes.bioImg}/>
                        </GridItem>
                        <GridItem xs={12} md={12}>
                            <Typography variant={"body1"}>Megan Sprenger received her Master of Fine Arts from Montana
                                State University in 2019. She received her Bachelor of Fine Arts in Studio Art with an
                                emphasis in ceramics and sculpture from the University of Minnesota Duluth in 2016
                                Her work is inspired by her love for traveling, combined with the history of ceramics
                                and the progression of sciences. She interweaves psychology, biology, and urban planning
                                philosophies into her work. The use of historical ideology within ceramics and
                                architectural and city planning is incorporated to introduce a more modern theme
                                and encourage on a conversation between the ceramic vessel and the viewer.
                                The imagery and surface details exemplify disorders, more precisely as the small
                                particles of matter that change our perceptions within a variety of situations.
                                These situations come across in the ways that the space we live in creates a
                                phenomenological atmosphere, ultimately mirroring our own subconscious development.
                            </Typography>
                            <div className={classes.raisedDivider}/>
                            <Typography variant={"body1"}>
                                Megan has been teaching art for the last three years. Her goals for her students are to
                                step into a new tactile world where they can explore the use of ceramics through
                                history,
                                functionality, and expressions.<br/>
                                Each student receives hands on time with Megan,
                                as she breaks down the importance of ceramics as a material and its use in our daily
                                lives.
                            </Typography>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </>
    );
}
