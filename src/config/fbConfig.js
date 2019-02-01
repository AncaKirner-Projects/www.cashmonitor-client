import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAyC66EMXzvzMelsi6AqxJQJLWYKICPp6A",
  authDomain: "my-shoppings-220409.firebaseapp.com",
  databaseURL: "https://my-shoppings-220409.firebaseio.com",
  projectId: "my-shoppings-220409",
  storageBucket: "my-shoppings-220409.appspot.com",
  messagingSenderId: "1007882056552"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;