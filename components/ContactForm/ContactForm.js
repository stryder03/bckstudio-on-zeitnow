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
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import {Close} from "@material-ui/icons";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle"
import classNames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    ...styles,
    form: {
        maxWidth: "100%",
    },
    textField: {
        marginRight: "1rem",
    },
    textArea: {
        marginTop: "2rem",
        marginLeft: "0"
    },
    dialog: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        position: "relative",
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

    // react-hook-forms props
    const { register, handleSubmit, reset, formState} = useForm();

    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [displayDialog, setDialog] = React.useState(<CircularProgress color={"primary"}/>);
    const [cloudFunctionReady, warmUpCloudFunction] = React.useState(false);

    // Identify when a form field has been touched
    const { touched } = formState;

    // Warm up cloud function when a form field is touched. Decreases time to submit form
    useEffect(() => {
        if (!cloudFunctionReady) {
            const formTouched = async () => {
                if (JSON.stringify(touched).length > 2) {
                    return await axios.get("https://us-central1-bckapp-84b75.cloudfunctions.net/c1e1dc4562aa425cb765ae56c92e937d", {
                        validateStatus: function (status) {
                            return status < 500; // Reject only if the status code is greater than or equal to 500
                        }
                    })
                }
            };
            formTouched().then((status) => {
                if(status) {
                    warmUpCloudFunction(true)
                }
            }).catch();
        }
    });
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
            submitSuccess = await axios.post("https://us-central1-bckapp-84b75.cloudfunctions.net/c1e1dc4562aa425cb765ae56c92e937d", data)
        }
        catch(err){
            return false
        }
        if (submitSuccess){
            handleDialog(<Typography variant={"h6"} color={"primary"}>Thanks for reaching out, we will get in touch with you soon</Typography> );
            reset();
        }
        else {
            handleDialog(<Typography variant={"h6"} color={"primary"}>Something went wrong, we were notified about the error, but please try calling or sending a message on Facebook</Typography>);
            reset();
        }

    };
    const allowSubmit = () => {
        setSubmitButtonDisabled(false)
    };

    const formTitle = props.formTitle === undefined ? "Contact Us" : props.formTitle;

    return (
        <div className={classes.form}>
            <Typography variant={"h3"} color={"primary"} align={"center"}>
                { formTitle }
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField id={"firstName"} name={"firstName"} margin={"normal"} fullWidth label={"First Name"} required variant={"outlined"} color={"primary"} className={classes.textField} inputRef={register}/>
                <TextField id={"lastName"} name={"lastName"} margin={"normal"} fullWidth label={"Last Name"} required variant={"outlined"} color={"primary"} className={classes.textField} inputRef={register}/>
                <TextField id={"email"} label={"Email"} name={"email"} margin={"normal"} fullWidth required type={"email"} variant={"outlined"} color={"primary"} inputRef={register}/>
                <TextField id={"message"}  name={"message"} margin={"normal"} label={"Message"} multiline fullWidth rowsMax={10} rows={5} placeholder="How can we help?" variant={"outlined"} color={"primary"} inputRef={register}/>
                <br/>
                <ReCAPTCHA sitekey={"6LcKbdkUAAAAAAI9vInOSkXuRV93iuncCdv13wVd"} onChange={allowSubmit}/>
                <br/>
                <Button id={"submitForm"} variant={"contained"} color={"secondary"} className={classNames(classes.textArea)} type={"submit"} disabled={submitButtonDisabled}>Send Message</Button>
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
