import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';


import Main from './components/Main';
import './App.css';

var firebaseConfig = {
  apiKey: "AIzaSyBG0HaNk2YWBp1cHllsVpYszZFI3J-hG1c",
  authDomain: "trackcoronatrack01.firebaseapp.com",
  databaseURL: "https://trackcoronatrack01.firebaseio.com",
  projectId: "trackcoronatrack01",
  storageBucket: "trackcoronatrack01.appspot.com",
  messagingSenderId: "245771598728",
  appId: "1:245771598728:web:402f79ff525fd35f13983d",
  measurementId: "G-QDTDEHXB7J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.auth();

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  // signInFlow: 'popup',

  // signInSuccessUrl: '/',

  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  // Other config options...
  callbacks: {
    signInSuccess: function() {
      return false
    }
  }
});


// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });


function App() {
  return (
    <Provider store={store}>
      <div id="firebaseui-auth-container"></div>
      <Main />
    </Provider>
  );
}

export default App;