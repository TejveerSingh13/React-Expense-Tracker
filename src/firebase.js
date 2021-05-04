import firebase from "firebase/firebase";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const firebaseConfig = {
    apiKey: "AIzaSyCXEDwVK4Ft1UOvf5JzeZk9e3fCEQ2AMe4",
    authDomain: "my-project-database-c4a55.firebaseapp.com",
    databaseURL: "https://my-project-database-c4a55-default-rtdb.firebaseio.com",
    projectId: "my-project-database-c4a55",
    storageBucket: "my-project-database-c4a55.appspot.com",
    messagingSenderId: "817853158092",
    appId: "1:817853158092:web:94d5660bc7eed55dd4a869",
    measurementId: "G-094CY0RRER"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
export default firebase