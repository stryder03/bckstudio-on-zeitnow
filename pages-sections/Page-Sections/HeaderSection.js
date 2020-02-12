import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import {ParallaxBanner} from "react-scroll-parallax"
// Images
import heroImg1 from "assets/img/bck/darkened-wheel-using-rib/Bozeman-Community-Kiln-design-21-darkened.jpg";
import MainLogo from "../../components/MainLogo/MainLogo";

const useStyles = makeStyles(theme => ({
    parallax: {
        maxWidth: "100%",
    },

}));

export default function HeaderSection(props) {
    const classes = useStyles();
    const { noParallax, ...rest } = props;

    return (
        <div>
            <Header
                color="transparent"

                rightLinks={<HeaderLinks role={"navigation"}/>}
                fixed
                logoType="nav_logo_lg"
                changeColorOnScroll={noParallax === undefined ? {
                    height: 50,
                    color: "white",
                    logoType: "nav_logo_sm"
                } : {
                    height: -200,
                    color: "white",
                    logoType: "nav_logo_sm"
                }}
                {...rest}
            />
            <ParallaxBanner
                layers={[
                    {
                        image: heroImg1,
                        amount: 0.2
                    },
                    {
                        children: <MainLogo/>,
                        amount: 0.0,
                        props: {style: {marginTop: "6rem", textAlign: "center"}}
                    }

                ]}
            >
            </ParallaxBanner>
        </div>
    )
};
