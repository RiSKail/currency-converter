import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyCeo1Ej6MynM-kSMlru41CtAkWvmVxiEUI',
  authDomain: 'currency-converter-390b0.firebaseapp.com',
  projectId: 'currency-converter-390b0',
  storageBucket: 'currency-converter-390b0.appspot.com',
  messagingSenderId: '120270600197',
  appId: '1:120270600197:web:f7162eca0bd4b6b383046c',
  measurementId: 'G-85M3SWTZRH',
}

const settings: any = { timestampsInSnapshots: true }

firebase.initializeApp(config)
firebase.firestore().settings(settings)

export default firebase
