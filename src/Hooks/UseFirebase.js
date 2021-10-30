import { GoogleAuthProvider, getAuth, signInWithPopup,signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

import { useState } from "react";
import { useEffect } from "react";
initializeAuthentication()

const UseFirebase = () => {
     const [user,setUser]=useState({})
     const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle=()=>{
      setIsLoading(true)
        const provider = new GoogleAuthProvider();
      return  signInWithPopup(auth, provider)
     
    }

    const logOut = () => {
        signOut(auth)
          .then(() => {
            setUser({});
          })
         .finally(() => setIsLoading(false));
        
      }
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

      
    
    
    return {
        user,
        isLoading,
        signInUsingGoogle,
        setIsLoading,
        logOut
    }
};

export default UseFirebase;