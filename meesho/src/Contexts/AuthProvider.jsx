import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [result, setResult] = useState("")

    return (
        <AuthContext.Provider value={{ result, setResult }}>
            {children}
        </AuthContext.Provider>
    )
}