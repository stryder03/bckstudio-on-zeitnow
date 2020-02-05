import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
// Images
import heroImg1 from "assets/img/bck/darkened-wheel-using-rib/Bozeman-Community-Kiln-design-21-darkened.jpg";
import MainLogo from "../../components/MainLogo/MainLogo";

const style = {

};

const useStyles = makeStyles(style);

export default function HeaderSection(props) {
    const classes = useStyles();
    const { noParallax, ...rest } = props;
    const useParallax = noParallax === undefined ? <Parallax filter responsive image={heroImg1}>
        <MainLogo/>
    </Parallax> : <div/>;

    return (
        <div>
            <Header
                color= "transparent"
                rightLinks={<HeaderLinks />}
                fixed
                logoType="nav_logo_lg"
                changeColorOnScroll={ noParallax === undefined ? {
                    height: 200,
                    color: "white",
                    logoType: "nav_logo_sm"
                } : {
                    height: -200,
                    color: "white",
                    logoType: "nav_logo_sm"
                }}
                {...rest}
            />
            {useParallax}
        </div>
    )
};
