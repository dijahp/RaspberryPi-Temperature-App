import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.appConfig = app;

    this.auth = app.auth();

    //log-in database
    this.db = app.database();

    //firestore connection
    this.fs = app.firestore()//.enablePersistence();
            // .settings({
            //   cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
            // })
            // .catch(function(err) {
            //     if (err.code == 'failed-precondition') {
            //         // Multiple tabs open, persistence can only be enabled
            //         // in one tab at a a time.
            //         // ...
            //     } else if (err.code == 'unimplemented') {
            //         // The current browser does not support all of the
            //         // features required to enable persistence
            //         // ...
            //     }
            // });

  }

  // ** Auth API ** 
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  // ** User API **
  user = uid => this.db.ref(`users/${uid}`);
  
  users = () => this.db.ref('users');

}

export default Firebase;