import {TextField, Typography} from "@material-ui/core";
import Button from "../CustomButtons/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";

const useStyles = makeStyles(theme => ({
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
}));
export default function ContactForm(props) {

    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
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
        </div>
    )
}
