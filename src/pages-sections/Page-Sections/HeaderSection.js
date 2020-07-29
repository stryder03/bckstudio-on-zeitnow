import React from "react";
import LargeHeader from "../../components/Header/LargeHeader";
import HeaderLinks from "../../components/Header/HeaderLinks";
import {ParallaxBanner} from "react-scroll-parallax"
import heroImg1 from "src/assets/img/bck/darkened-wheel-using-rib/Bozeman-Community-Kiln-design-21-darkened.jpg";
import MainLogo from "../../components/MainLogo/MainLogo";
import {Hidden} from "@material-ui/core";
import SmallHeader from "../../components/Header/SmallHeader";

export default function HeaderSection(props) {
    const { noParallax, ...rest } = props;

    return (
        <div>
            <Hidden mdDown>
            <LargeHeader
                color="transparent"

                rightLinks={<HeaderLinks role={"navigation"}/>}
                fixed
                changeColorOnScroll={noParallax === undefined ? {
                    height: 50,
                    color: "white",
                } : {
                    height: -200,
                    color: "white",
                }}
                {...rest}
            />
            </Hidden>
            <Hidden lgUp>
                <SmallHeader
                    color="white"
                    rightLinks={<HeaderLinks role={"navigation"}/>}
                    fixed
                    {...rest}
                />
            </Hidden>
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
}
