import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// Import Screens
import BottomTabNavigator from './BottomTabNavigator'; // Your bottom tabs
import TopUpScreen from '../screens/TopUpScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LanguageScreen from '../screens/LanguageScreen';
import LogoutScreen from '../screens/LogoutScreen'; // Assuming this is a confirmation screen
import TripDetailsScreen from '../screens/TripDetailsScreen'; // Renamed from TripScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false, // Hide header globally for this stack, headers are managed in screens/tabs
        gestureEnabled: true, // Enable swipe gestures
        // Add slide transitions (optional)
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {/* The Bottom Tab Navigator is the main screen */}
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      {/* Other screens accessible from within the app (e.g., from Menu) */}
      <Stack.Screen name="TopUp" component={TopUpScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} />

      {/* Logout confirmation screen - presented modally */}
      <Stack.Screen
         name="Logout"
         component={LogoutScreen}
         options={{
            presentation: 'transparentModal', // Show transparently over the previous screen
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, // Fade effect
            gestureEnabled: false, // Disable swipe back for modal
         }}
        />

      {/* Add other screens like Edit Profile, Change Password etc. here */}

    </Stack.Navigator>
  );
};

export default AppNavigator;