import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createRegister = (displayName, photoURL, email, password) => {
        return createUserWithEmailAndPassword(
            auth,
            displayName,
            photoURL,
            email,
            password,
        );
    };
    const createLogin = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const editProfile = (displayName, photoURL) =>{
        return updateProfile(auth.currentUser, displayName, photoURL)
    }
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        setIsLoading(true)
        return signOut(auth);
    };
    useEffect(() => {

        const Unsbscribe = onAuthStateChanged(auth, currentuser=>{
            setIsLoading(true)
            if (currentuser) {
                setUser(currentuser)
            }else{
                setUser(null)
            }
            setIsLoading(false)
        })
        return ()=>{
            Unsbscribe();
        }
    }, [auth]);
    const authInfo = {
        user,
        isLoading,
        setIsLoading,
        createRegister,
        createLogin,
        googleLogin,
        editProfile,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AuthProvider;
