import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJ2nRs-ADmG2SDReWvcodEhrNGmTa4xEE",
    authDomain: "pockemons11.firebaseapp.com",
    projectId: "pockemons11",
    storageBucket: "pockemons11.appspot.com",
    messagingSenderId: "1004877613388",
    appId: "1:1004877613388:web:8c23d3d33632f4a39767e9",
    measurementId: "G-6B2W9FQWYL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase