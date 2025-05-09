// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state here

  // Simulate checking for a stored token on initial load
  React.useEffect(() => {
    const checkAuth = async () => {
      // Replace with your actual async check (e.g., AsyncStorage.getItem('userToken'))
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      // const userToken = await AsyncStorage.getItem('userToken');
      // setIsAuthenticated(!!userToken);
      setIsAuthenticated(false); // Default to false for testing login
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = () => {
    // In a real app, you'd set a token here as well
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear token etc.
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};