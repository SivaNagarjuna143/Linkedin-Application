
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrUZnltJhmrwn_sZ7XIy0i7ePbOA67wJc",
    authDomain: "linkedin-clone-yt-c6233.firebaseapp.com",
    projectId: "linkedin-clone-yt-c6233",
    storageBucket: "linkedin-clone-yt-c6233.appspot.com",
    messagingSenderId: "173597626241",
    appId: "1:173597626241:web:0d1be2878f7969bdaea280",
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
   const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};