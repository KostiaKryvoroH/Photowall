// import { ref } from "firebase/database";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// import { getDatabase, ref, set } from "firebase/database";

import { initializeApp } from "firebase/app";
import {getDatabase, ref, set} from 'firebase/database';



 const firebaseConfig = {
    apiKey: "AIzaSyBsb6KBHdsgWN7tMtQ95h4sUetWoUqcPWc",
    authDomain: "photowall-5ed5b.firebaseapp.com",
    databaseURL: "https://photowall-5ed5b-default-rtdb.firebaseio.com",
    projectId: "photowall-5ed5b",
    storageBucket: "photowall-5ed5b.appspot.com",
    messagingSenderId: "275554631611", 
    appId: "1:275554631611:web:4862966dfb069f90bc4e9e",
    measurementId: "G-H96NVPYYBW"   
}; 

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const dbref = ref(getDatabase());


// const database = firebase.database();

export {database, dbref} 