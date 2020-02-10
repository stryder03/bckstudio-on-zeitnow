import React from "react";

import style from "../../assets/jss/nextjs-material-kit/components/acuityStyles";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(style);

export default function AcuityScheduler(props) {
    // Category Pattern: "category:Classes"
    // Individual event  pattern: "10494352"
    const { apptType } = props;
    const classes = useStyles();
    console.log(apptType);
    const source = "https://app.acuityscheduling.com/schedule.php?owner=17880488&appointmentType=" + (apptType !== undefined ? apptType : "");
    console.log(source);

    return (
        <div className={classes.container} >
            <iframe src={source} width="100%" height="1400" frameBorder="0"/>
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"/>
        </div>

    )
}
