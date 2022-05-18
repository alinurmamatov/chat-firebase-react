import {createContext, useContext, useMemo, useState} from 'react';

const AuthContext = createContext({
    user: null,
    signInWithEmail: () => {},
    signInWithGmail: () => {}
});

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

export const AuthState = ({children}) => {
    const [user, setUser] = useState(null);

    const signInWithEmail = () => {

    }
    
    const signInWithGmail = () => {

    }

    const info = useMemo( 
        () => ({
            user: user,
            signInWithEmail: signInWithEmail,
            signInWithGmail: signInWithGmail
        }), [user]);

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}