import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from '../Firebase/config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
    });

    return () => unsubscribe();
    }, []);

    const contextValue = {
        user,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};