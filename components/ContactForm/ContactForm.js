import {
    CircularProgress,
    Dialog,
    DialogContent,
    DialogTitle,
    Fade,
    IconButton,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import Button from "../CustomButtons/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import submitForm from "../../Scripts/submitForm";
import {Close} from "@material-ui/icons";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle"


const useStyles = makeStyles(theme => ({
    ...styles,
    form: {
        maxWidth: "100%",
    },
    textField: {
        marginRight: "1rem",
    },
    textArea: {
        margin:"auto",
        textAlign: "center",
        marginTop: "2rem",
    },
    dialog: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    title:{
        flex: 1,
        fontWeight: "700"
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});
export default function ContactForm(props) {

    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const [open, setOpen] = React.useState(false);
    const [displayDialog, setDialog] = React.useState(<CircularProgress color={"primary"}/>);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleDialog = (obj) => {
        setDialog(obj)
    };
    const onSubmit = async (data) => {
        handleToggle();
        let submitSuccess;
        try {

            submitSuccess = await submitForm(data)
        }
        catch(err){
            console.error(err);
            return false
        }
        if (submitSuccess){
            handleDialog(<Typography variant={"h6"} color={"primary"}>Thanks for reaching out, we will get in touch with you soon</Typography> )
        }
        else {
            handleDialog(<Typography variant={"h6"} color={"primary"}>Something went wrong, we were notified about the error, but please try calling or sending a message on Facebook</Typography>)
        }
    };
    const { } = props;
    const formTitle = props.formTitle === undefined ? "Contact US" : props.formTitle;

    return (
        <div className={classes.form}>
            <Typography variant={"h3"} color={"primary"} align={"center"}>
                { formTitle }
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField id={"firstName"} name={"firstName"} margin={"normal"} fullWidth label={"First Name"} required variant={"outlined"} color={"primary"} className={classes.textField} inputRef={register}/>
                <TextField id={"lastName"} name={"lastName"} margin={"normal"} fullWidth label={"Last Name"} required variant={"outlined"} color={"primary"} className={classes.textField} inputRef={register}/>
                <TextField id={"email"} label={"Email"} name={"email"} margin={"normal"} fullWidth required type={"email"} variant={"outlined"} color={"primary"} inputRef={register}/>
                <TextField id={"message"}  name={"message"} margin={"normal"} label={"Message"} multiline fullWidth rowsMax={10} rows={5} placeholder="How can we help?" variant={"outlined"} color={'primary'} inputRef={register}/>
                <br/>
                <Button id={"submitForm"} variant={"contained"} color={"secondary"} className={classes.textArea} type={"submit"}>Send Message</Button>
            </form>
            <div className={classes.listItem}>
                <Dialog open={open} onBackdropClick={handleClose} TransitionComponent={Transition} aria-label={"Sending Contact Form"}>
                    <DialogTitle className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <Close />
                            </IconButton>
                            <Typography variant="h5" className={classes.title} align={"center"}>
                                Forwarding your message to the studio!
                            </Typography>
                        </Toolbar>
                    </DialogTitle>
                    <DialogContent>
                        <GridContainer align={"center"}>
                            <GridItem xs={12}>
                                {displayDialog}
                            </GridItem>
                        </GridContainer>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
