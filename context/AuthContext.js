import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [utilisateur, setUtilisateur] = useState(null);

    const connecter = (user) => setUtilisateur(user);
    const deconnecter = () => setUtilisateur(null);

    return (
        <AuthContext.Provider value={{ utilisateur, connecter, deconnecter }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);