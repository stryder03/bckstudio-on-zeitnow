/* eslint-disable no-console */
const admin = require("firebase-admin");
let serviceAccount = require("../../GoogleKeys/bcktestapp-firebase-adminsdk-7kjoz-1905066da2");
let classList = require("../json/classes");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

async function importClassList() {

    await classList.classList.map((clayClass) => {

        console.log(clayClass.type);
        console.log(clayClass.title);
        db.collection("classes").doc().set({
            type: clayClass.type,
            title: clayClass.title,
            classInfo: clayClass.classInfo,
            classDescription: clayClass.classDescription,
            classID: clayClass.classID,
            buttonText: clayClass.buttonText,
            active: true
        })
    })
}

importClassList().then((event) => console.log(event)).catch((error) => console.log(error));
