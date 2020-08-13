import FirebaseAuth from "src/components/FirebaseAuth/FirebaseAuth";
import React from "react";
import {Typography} from "@material-ui/core";

const Auth = () => {
    return (
        <div>
            <Typography variant={"h1"}>Sign in</Typography>
            <div>
                <FirebaseAuth />
            </div>
        </div>
    )
}

export default Auth

