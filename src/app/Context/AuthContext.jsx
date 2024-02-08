"use client"
import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [loggedin, setLoggedin] = useState({
        status: false,
        name: "",
        email: "",
    })
    const [mode, setMode] = useState("default");
    const toggle = () => {
        setMode((prev) => (prev === "default" ? "dark" : "default"));
    };
    return (
        <AuthContext.Provider value={{ loggedin, setLoggedin, toggle,mode }}>
            <div className={`theme ${mode}`} >
                {children}
            </div>
        </AuthContext.Provider>
    )
}