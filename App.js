// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import provider and hook
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import { COLORS } from './constants/colors';

// Main component that decides which navigator to show
const AppContent = () => {
  const { isAuthenticated, isLoading } = useAuth(); // Get state from context

  if (isLoading) {
    // Show a loading screen while checking auth
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.secondary} />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </>
  );
}

export default function App() {
  return (
    // Wrap everything with the AuthProvider
    <AuthProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    }
});