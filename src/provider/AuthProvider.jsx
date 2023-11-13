import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // create new user
    const registerUser = (email, password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update users name and photo
    const updateUser =(name, photo)=>{
        setIsLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // login existing user
    const loginUser = (email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut Existing user
    const logOutUser = ()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    // setup an observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        isLoading,
        registerUser,
        updateUser,
        loginUser,
        logOutUser
    }
    return(
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    )}

AuthProvider.propTypes = {
    children:PropTypes.node,
}    
export default AuthProvider;