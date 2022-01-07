import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDOjv68dhi1tiS1_w8I05O-40B9TNbiaD4',
  authDomain: 'linkedin-clone-be983.firebaseapp.com',
  projectId: 'linkedin-clone-be983',
  storageBucket: 'linkedin-clone-be983.appspot.com',
  messagingSenderId: '462215845250',
  appId: '1:462215845250:web:7c3c8cb9bffaf8ad176b9b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
