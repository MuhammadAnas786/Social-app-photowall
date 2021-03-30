import  firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAUA1XO8kdWDHpDb0ineOpQStn6bvxUyHw",
    authDomain: "photowall-5be56.firebaseapp.com",
    databaseURL: "https://photowall-5be56-default-rtdb.firebaseio.com",
    projectId: "photowall-5be56",
    storageBucket: "photowall-5be56.appspot.com",
    messagingSenderId: "751304939022",
    appId: "1:751304939022:web:b692991a1342b721af4e5f"
  };

  firebase.initializeApp(firebaseConfig)
  const database = firebase.database()

  export{database}