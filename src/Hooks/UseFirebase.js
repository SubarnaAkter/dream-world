import { GoogleAuthProvider, getAuth, signInWithPopup,signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

import { useState } from "react";
import { useEffect } from "react";
initializeAuthentication()

const UseFirebase = () => {
     const [user,setUser]=useState({})

    const auth = getAuth();

    const signInUsingGoogle=()=>{
        const provider = new GoogleAuthProvider();
      return  signInWithPopup(auth, provider)
     
    }

    const logOut = () => {
        signOut(auth)
          .then(() => {
            setUser({});
          })
        //   .finally(() => setIsLoading(false));
        
      }
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
         
        });
        return () => unsubscribed;
    }, [])

      
    
    
    return {
        user,
      
        signInUsingGoogle,
      
        logOut
    }
};

export default UseFirebase;