// screens/LogoutScreen.js
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const LogoutScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth(); // Get logout function

  const handleLogoutConfirm = () => {
      console.log('Logging out...');
      logout(); // Call logout from context
      // No need to manually navigate, state change handles it
  };

  const handleCancel = () => {
      navigation.goBack(); // Go back to the previous screen (Menu)
  };

 // ... (rest of the component remains the same) ...

   return (
    <View style={styles.container}>
        {/* Using view as a modal overlay */}
        <View style={styles.modalContent}>
            <MaterialCommunityIcons name="logout" size={40} color={COLORS.primary} style={styles.icon} />
            <Text style={styles.title}>Log-out</Text>
            <Text style={styles.message}>Are you sure do you want to Log-out?</Text>

            <View style={styles.buttonRow}>
                 <StyledButton
                    title="Yes"
                    onPress={handleLogoutConfirm}
                    style={styles.button}
                 />
                 <StyledButton
                    title="No"
                    onPress={handleCancel}
                    style={styles.button}
                    variant="secondary" // Use secondary style for 'No'
                 />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { // Semi-transparent background overlay
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim the background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    // Add shadow for elevation effect (optional)
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
      marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: COLORS.darkGray,
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around', // Space out buttons
      width: '100%',
  },
  button: {
      flex: 1, // Make buttons take equal space
      marginHorizontal: 10, // Add space between buttons
  },
});

export default LogoutScreen;