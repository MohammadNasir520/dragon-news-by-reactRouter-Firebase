import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  const providerLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInbyEmailAndPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

const facebookLogin=(provider)=>{
  
  return signInWithPopup(auth, provider)
}



  const updateUserprofile=(profile)=>{
return updateProfile(auth.currentUser, profile)


  }

  const Logout = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    providerLogin,
    loading,
    Logout,
    createUser,
    signInbyEmailAndPassword,
    facebookLogin,
    updateUserprofile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
