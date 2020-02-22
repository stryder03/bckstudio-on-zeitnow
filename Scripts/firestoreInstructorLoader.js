/* eslint-disable no-console */
const admin = require("firebase-admin");
let serviceAccount = require("../../GoogleKeys/bcktestapp-firebase-adminsdk-7kjoz-1905066da2");
let instrList = require("../json/instructors");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

async function importClassList() {

    await instrList.instructors.map(async (instructor) => {
        await db.collection("instructors").doc().set({
            name: instructor.name,
            artistStatement: instructor.artistStatement,
            bio: instructor.bio,
            image: instructor.image
        });
    })
}

importClassList().then((event) => {
    console.log(event);
    return event
}).catch((error) => {
    console.log(error);
    return error
});
