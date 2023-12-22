import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../createClient";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const signOut = () => supabase.auth.signOut();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN") {
                setUser(session.user);
                setAuth(true);
            } else if (event === "SIGNED_OUT") {
                setUser(null);
                setAuth(false);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={{ user, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;