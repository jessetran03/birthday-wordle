import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: 'AIzaSyB2PjAc44Hzs96y4lVeWy54Oc_QyVMz-5o',
  authDomain: 'birthday-wordle.firebaseapp.com',
  databaseURL: 'https://birthday-wordle-default-rtdb.firebaseio.com',
  projectId: 'birthday-wordle',
  storageBucket: 'birthday-wordle.appspot.com',
  messagingSenderId: '441896963568',
  appId: '1:441896963568:web:a8727e5806f692d17de135',
})

const db = getFirestore(app)

export default db
