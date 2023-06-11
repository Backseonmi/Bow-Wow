import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  // Firebase 설정 정보 입력
  apiKey: "AIzaSyAECUp96A7cEUIP6V_SBfi6P_aEBMR_Bbo",
  authDomain: "bow-wow-1d728.firebaseapp.com",
  projectId: "bow-wow-1d728",
  storageBucket: "bow-wow-1d728.appspot.com",
  messagingSenderId: "159391067710",
  appId: "1:159391067710:web:455ea88cab4fccd2ae2b6f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
};

const useAuth = () => {
  return auth;
};

export { db, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc, useCurrentUser, useAuth };
