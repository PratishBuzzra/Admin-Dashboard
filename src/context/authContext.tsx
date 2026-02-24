import { createContext, useState, type ReactNode } from "react";

interface User{
    email: string;
    password: string;
    role: string;
    name: string
}

interface AuthContextProps {
    user: User | null;
    login: (userData: User)=>void;
    logout: ()=>void;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}
 const AuthContext = createContext<AuthContextProps | null>(null);
export const AuthProvider = ({children}:AuthProviderProps)=>{
    const [user, setUser] = useState<User | null>(()=>{
        const storedUser = localStorage.getItem("userData");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const login = (userData: User)=>{
        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData))
    }
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("userData")
    }
    const isAuthenticated = !!user

    return (
        <AuthContext.Provider value={{user, login, logout,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;