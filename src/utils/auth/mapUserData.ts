import {BckUser, FirebaseUser} from "../../index";

interface mapUserProps {
    (user: FirebaseUser): BckUser
}

export const mapUserData: mapUserProps = (user) => {
    const { uid, email, xa } = user
    return {
        id: uid,
        email,
        token: xa,
    }
}
