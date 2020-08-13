/* globals window */
import React, {useEffect, useState} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from 'src/utils/auth/initFirebase'
import {setUserCookie} from "../../utils/auth/userCookies";
import {mapUserData} from "../../utils/auth/mapUserData";

// Init the Firebase app.
initFirebase()


const firebaseAuthConfig = {
    signInFlow: 'popup',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
    ],
    signInSuccessUrl: '/login',
    credentialHelper: 'none',
    callbacks: {
        // @ts-ignore
        signInSuccessWithAuthResult: async ({ user }) => {
            const userData = mapUserData(user)
            setUserCookie(userData)
        },
    },
}
const FirebaseAuth = () => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

    return (
        <div>
            {renderAuth ? (
                <StyledFirebaseAuth
                    // @ts-ignore
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                />
            ) : null}
        </div>
    )
}

export default FirebaseAuth;
