import firebase from 'firebase';

/* TODO 
a) [optional] move to a different js file
b) check if I can use firebase SDK Auto-Configuration 
*/
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCrRQ8dQtXxiV3kFbRZvIwUODo4pHg3IA4",
    authDomain: "merkury-react.firebaseapp.com",
    databaseURL: "https://merkury-react.firebaseio.com",
    projectId: "merkury-react",
    // storageBucket: "merkury-react.appspot.com",
    messagingSenderId: "145229391935"
  };
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
