import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJypT-GovAeZwHVKOSi1SyrUiyIfPrCLA",
    authDomain: "f9reading-list.firebaseapp.com",
    projectId: "f9reading-list",
    storageBucket: "f9reading-list.appspot.com",
    messagingSenderId: "703111076074",
    appId: "1:703111076074:web:588fe094d4d0ed43811f93"
};

//   init firebase app
initializeApp(firebaseConfig);

//   init service
const db = getFirestore();

export { db };