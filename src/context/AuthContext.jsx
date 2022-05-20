import {createContext, useContext, useMemo, useState} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth, db} from '../firebase/firebaseConfig';
import { child, push, ref, set } from 'firebase/database';

const AuthContext = createContext({
    user: null,
    signUpWithEmail: () => {},
    signInWithGmail: () => {},
    logOut: () => {}
});

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

export const AuthState = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    onAuthStateChanged(auth, user => {
        if(user) {
            setUser(user);
        } else {
            setUser(null);
        }
        setIsLoading(false);
    })
    
    const signUpWithEmail = async ({email, password}) => {
        try {
            let response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            storeUser(response?.user);
        } catch (error) {
            console.log(error?.message);
        }
    }
    
    const signInWithGmail = async () => {
        try {
            const provider = new GoogleAuthProvider();
            let response = await signInWithPopup(auth, provider);
            console.log(response?.user);
            storeUser(response?.user);
        } catch(error) {
            console.log(error?.message);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch(error) {
            console.log(error?.message);
        }
    }

    const storeUser = (userData) => {
        const data = {
            name: userData?.displayName,
            email: userData?.email,
            photo: userData?.photoURL,
        }

        set(ref(db, `users/${userData?.uid}`), data)
    }

    const info = useMemo( 
        () => ({
            user: user,
            signUpWithEmail: signUpWithEmail,
            signInWithGmail: signInWithGmail,
            logOut : logOut
        }), [user]);

    return (
        <AuthContext.Provider value={info}>
            {isLoading ? <p className='loading'>loading . . .</p> : children}
        </AuthContext.Provider>
    )
}