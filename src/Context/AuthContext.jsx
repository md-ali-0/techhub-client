import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const authInfo= {
        isLoading,
        setIsLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;