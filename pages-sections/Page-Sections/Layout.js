import React from "react";
import HeaderSection from "./HeaderSection";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

const style = theme => ({
    mainElement: {
        background: "#FFFFFF",
        zIndex: "2",
        position: "relative",
        borderRadius: "0.375rem",
        boxShadow: "0 1rem 1.5rem 0.125rem rgba(0, 0, 0, 0.14), 0 0.375rem 1.875rem 0.313rem rgba(0, 0, 0, 0.12), 0 0.5rem 0.625rem -0.313rem rgba(0, 0, 0, 0.2)"
    },
    parallaxMargin: {
        margin: "-3.75rem 5rem 2.5rem",
    },
    noParallaxMargin: {
        margin: "15rem 5rem 2.5rem",
    },
});

const useStyles = makeStyles(style);

export default function Layout(props) {
    const classes = useStyles();
    const {noParallax} = props;

    React.useEffect(() => {
        if (noParallax) {
            document.getElementById("mainElement").classList.remove(classes.parallaxMargin);
            document.getElementById("mainElement").classList.add(classes.noParallaxMargin);
        }
    });

    return (
        <div>
            <HeaderSection noParallax={noParallax}/>
            <div className={classNames(classes.mainElement, classes.parallaxMargin)} id={"mainElement"}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )

};
