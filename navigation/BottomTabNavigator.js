import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Platform } from 'react-native'; // Import View and Text

// Import Screens for Tabs
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import MenuScreen from '../screens/MenuScreen';

import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Component (Optional but needed for the curved effect)
// This is a simplified version. A true curved effect often requires libraries or complex SVG.
// For this example, we'll style the standard tab bar heavily.

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // We handle headers in individual screens or the parent stack
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') { // Use a distinct name if nesting
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'HistoryTab') {
            iconName = focused ? 'history' : 'history'; // No distinct outline variant often
          } else if (route.name === 'MenuTab') {
            iconName = focused ? 'menu' : 'menu';
          }
          // Adjust size and color
          const iconSize = focused ? 30 : 26;
          const iconColor = focused ? COLORS.primary : COLORS.darkGray;

          // Special styling for Home button to make it "pop"
          if (route.name === 'HomeTab') {
              return (
                  <View style={styles.homeTabWrapper}>
                      <MaterialCommunityIcons name={iconName} size={iconSize + 5} color={COLORS.white} />
                  </View>
              );
          }

          return <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />;
        },
         tabBarLabel: ({ focused, color }) => {
          let label;
          if (route.name === 'HomeTab') label = 'Home';
          else if (route.name === 'HistoryTab') label = 'History';
          else if (route.name === 'MenuTab') label = 'Menu';

           // Don't show label for the center Home button
            if (route.name === 'HomeTab') {
                return null; // Hide label for home
            }

          return <Text style={{ color: focused ? COLORS.primary : COLORS.darkGray, fontSize: 10 }}>{label}</Text>;
        },
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveTintColor: COLORS.primary, // Color for active label/icon tint
        tabBarInactiveTintColor: COLORS.darkGray, // Color for inactive label/icon tint
      })}
    >
      <Tab.Screen name="HistoryTab" component={HistoryScreen} />
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="MenuTab" component={MenuScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute', // Make it float
        bottom: 15, // Adjust spacing from bottom
        left: 15,
        right: 15,
        borderRadius: 20, // Rounded corners
        height: 70, // Increased height
        backgroundColor: COLORS.secondary, // Light blue background
        borderTopWidth: 0, // Remove top border line
        paddingBottom: Platform.OS === 'ios' ? 10 : 5, // Adjust padding for label spacing
        paddingTop: 5,
         // Shadow for elevation effect
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2, // Shadow above the tab bar
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tabBarItem: {
        // Styles for individual tab items if needed (e.g., vertical alignment)
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeTabWrapper: {
         // Make the home button circle "pop" up
        position: 'absolute',
        top: -25, // Move it up significantly
        backgroundColor: COLORS.primary, // Dark blue background for the circle
        width: 65,
        height: 65,
        borderRadius: 35, // Make it a circle
        justifyContent: 'center',
        alignItems: 'center',
        // Shadow for the circle
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
});


export default BottomTabNavigator;