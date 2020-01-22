import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCJ9RLNhvjVC_EJSQsMQ0iu0_XH4VwMQro",
  authDomain: "starwars-8363e.firebaseapp.com",
  databaseURL: "https://starwars-8363e.firebaseio.com",
  projectId: "starwars-8363e",
  storageBucket: "starwars-8363e.appspot.com",
  messagingSenderId: "881246344514",
  appId: "1:881246344514:web:587a50a4a3affeda5ba4db",
  measurementId: "G-JP60MTYZ9B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
  .then(snap => snap.user)
}