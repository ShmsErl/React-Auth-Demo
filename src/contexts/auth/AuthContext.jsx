import { jwtDecode } from 'jwt-decode';
import React, { createContext, useState, useEffect } from 'react';





const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const getInitialUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded)
      return {
        isAuthenticated: true,
        user:  {
          firstname:decoded.firstname,
          phoneNumber:decoded.phoneNumber,
          lastname:decoded.lastname ,
        },
        role: decoded.role,
      };
    }
    return {
      isAuthenticated: false,
      user: null,
      role: '',
    };
  };
  const [authInformation, setAuthInformation] = useState(getInitialUser());


  const hasPermission = (role) => {
    return authInformation.role === role;
  };

  const refreshUser = () => {
    const user = getInitialUser();
    setAuthInformation(user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authInformation, hasPermission,refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};