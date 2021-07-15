import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var fbConfig = {
  apiKey: 'AIzaSyCoMqwHENNQXz57RnFxYSY1ZBaVakfhVps',
  authDomain: 'coffeecafesho.firebaseapp.com',
  databaseURL: 'https://coffeecafesho.firebaseio.com',
  projectId: 'coffeecafesho',
  storageBucket: 'coffeecafesho.appspot.com',
  messagingSenderId: '300482988084',
  appId: '1:300482988084:web:132840788140c9f015a261',
};

if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}

export const db = firebase.database();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
