/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

import React from "react";
import Button, {ButtonProps} from "@material-ui/core/Button";
// @ts-ignore
import logo from "src/assets/img/bck/svg/bckHorizontalLogo.svg"
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => createStyles({
    navLogoSm: {
        height: "2.5rem"
    }
}))
const LogoButton = (props: ButtonProps) =>
{
    const classes = useStyles(props);
    const {id, ...rest} = props
    return (
        <Button {...rest}>
            <img id={id} src={logo} className={classes.navLogoSm} alt={"Bozeman Community Kiln Home"}/>
        </Button>
    );
};

export default LogoButton;


