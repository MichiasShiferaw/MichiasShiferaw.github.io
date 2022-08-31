import 'firebase/app';

import { initializeApp } from 'firebase/app';
import 'firebase/storage'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyD-hnbdhDlWCtJfbySAMDd9AN7i8MKM9EU",
  authDomain: "personalwebsite-afdf9.firebaseapp.com",
  projectId: "personalwebsite-afdf9",
  storageBucket: "personalwebsite-afdf9.appspot.com",
  messagingSenderId: "263110809103",
  appId: "1:263110809103:web:875d6f6377921ab094357a"
});

const storage = getStorage(firebaseConfig);

export default storage;