import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyCpw-u0Iy3JI9zJImIEee_4xHfiXbW87iI",
    authDomain: "blockchain-exchange-2b363.firebaseapp.com",
    databaseURL: "https://blockchain-exchange-2b363.firebaseio.com",
    projectId: "blockchain-exchange-2b363",
    storageBucket: "blockchain-exchange-2b363.appspot.com",
    messagingSenderId: "1031695712107"
}
export default firebase.initializeApp(config)
  