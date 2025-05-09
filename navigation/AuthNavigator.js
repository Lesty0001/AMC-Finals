import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// Import Auth Screens
import LoginScreen from '../screens/LoginScreen';
import LoginPasswordScreen from '../screens/LoginPasswordScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import SignUpDriverScreen from '../screens/SignUpDriverScreen';
import SignUpPassengerScreen from '../screens/SignUpPassengerScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ForgotPasswordOTPScreen from '../screens/ForgotPasswordOTPScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, // Generally hide headers in auth flow
        gestureEnabled: false, // Often disable gestures here
         // Add slide transitions (optional)
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginPassword" component={LoginPasswordScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="SignUpDriver" component={SignUpDriverScreen} />
      <Stack.Screen name="SignUpPassenger" component={SignUpPassengerScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTPScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;