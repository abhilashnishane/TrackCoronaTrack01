/*
// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBG0HaNk2YWBp1cHllsVpYszZFI3J-hG1c",
  authDomain: "trackcoronatrack01.firebaseapp.com",
  databaseURL: "https://trackcoronatrack01.firebaseio.com",
  projectId: "trackcoronatrack01",
  storageBucket: "trackcoronatrack01.appspot.com",
  messagingSenderId: "245771598728",
  appId: "1:245771598728:web:402f79ff525fd35f13983d",
  measurementId: "G-QDTDEHXB7J"
};
firebase.initializeApp(config);

class LandingPage extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

export default LandingPage;
*/

/*
import React from 'react';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';

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


firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.auth();

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  // signInFlow: 'popup',
  // signInSuccessUrl: '/',
  signInSuccessUrl: '/home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log(authResult);
      console.log(redirectUrl);

      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    }
  }
});

class LandingPage extends React.Component {
  render () {
    return (
      <div className="">
        <div id="firebaseui-auth-container"></div>
        <div>Landing page</div>
      </div>
    )
  }
}

export default LandingPage;
*/













// var firebaseConfig = {
//   apiKey: "AIzaSyBG0HaNk2YWBp1cHllsVpYszZFI3J-hG1c",
//   authDomain: "trackcoronatrack01.firebaseapp.com",
//   databaseURL: "https://trackcoronatrack01.firebaseio.com",
//   projectId: "trackcoronatrack01",
//   storageBucket: "trackcoronatrack01.appspot.com",
//   messagingSenderId: "245771598728",
//   appId: "1:245771598728:web:402f79ff525fd35f13983d",
//   measurementId: "G-QDTDEHXB7J"
// };


// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// firebase.auth();

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   // signInFlow: 'popup',
//   // signInSuccessUrl: '/',

//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   callbacks: {
//     signInSuccess: function() {
//       return false
//     }
//   }
// });


// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });