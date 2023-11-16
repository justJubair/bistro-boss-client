import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxios from "../hooks/useAxios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axios = useAxios()
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // create new user
  const registerUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update users name and photo
  const updateUser = (name, photo) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // login with google
  const googleProvider = new GoogleAuthProvider()
  const loginGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
  }

  // login existing user
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut Existing user
  const logOutUser = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // setup an observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userInfo = {email: currentUser?.email}
      setUser(currentUser);
      if(currentUser){
          axios.post("/jwt", userInfo)
          .then(res=>{
            if(res.data.token){
              localStorage.setItem("access-token", res.data.token)
            }
          })
      }
      else{
        localStorage.removeItem("access-token")
      }
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [axios]);
  const authInfo = {
    user,
    isLoading,
    registerUser,
    updateUser,
    loginUser,
    loginGoogle,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
