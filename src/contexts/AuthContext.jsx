import { createContext, useState } from "react";


const AuthContext = createContext();

export function AuthProvider({children}){
    const persistedAuth = JSON.parse(localStorage.getItem("auth"));
    const [auth, setAuth] = useState(persistedAuth);


    function login(authData){
        setAuth(authData);
        localStorage.setItem("auth", JSON.stringify(authData));
        console.log(authData);
    }

    function logOff(){
        localStorage.removeItem("auth");
        setAuth(null);
    }

    return (
        <AuthContext.Provider value={{auth, login, logOff}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext;