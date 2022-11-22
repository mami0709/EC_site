import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXXUg9BzRrp2NwkmDykOSR-fisJ2t_WIw',
  authDomain: 'react-ec-site-11-20.firebaseapp.com',
  projectId: 'react-ec-site-11-20',
  storageBucket: 'react-ec-site-11-20.appspot.com',
  messagingSenderId: '695206693151',
  appId: '1:695206693151:web:f6c3c76579df06d3c6482a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
