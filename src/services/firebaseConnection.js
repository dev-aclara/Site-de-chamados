
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyDlRmx6Bq7nHip2AZSVG9qyLRYg96rimys",
  authDomain: "sistema-1dec6.firebaseapp.com",
  projectId: "sistema-1dec6",
  storageBucket: "sistema-1dec6.appspot.com",
  messagingSenderId: "172390217489",
  appId: "1:172390217489:web:566d2f02db69a6c0e07eb0",
  measurementId: "G-YZ8NVTVD21"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;