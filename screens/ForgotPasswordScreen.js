import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirmPassword = () => {
    if (!newPassword || !confirmPassword) {
        alert('Please fill both password fields.');
        return;
    }
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    // Add password complexity check if needed

    setLoading(true);
    console.log("Setting new password...");
    // Simulate API Call
    setTimeout(() => {
        setLoading(false);
        alert('Password Updated Successfully!');
        navigation.navigate('Login'); // Go back to login after success
    }, 1500);
  };

   return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/jeep2go.png')} style={styles.logo} />

        <Text style={styles.title}>Create your new Password</Text>

        <Text style={styles.label}>Enter new password</Text>
        <StyledInput
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          isPassword={true}
          style={styles.input}
        />
         <Text style={styles.passwordHint}>
            Password must contain uppercase letters, lowercase letters, numbers and special characters
         </Text>

        <Text style={styles.label}>Re-enter your new password</Text>
         <StyledInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          isPassword={true}
          style={styles.input}
        />

        <StyledButton
            title="Confirm Password"
            onPress={handleConfirmPassword}
            style={styles.confirmButton}
            loading={loading}
            disabled={loading}
        />

      </ScrollView>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
   scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  logo: {
    width: 180,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 50, // More space after logo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 30,
    textAlign: 'center',
     alignSelf: 'flex-start',
  },
   label: {
        fontSize: 16,
        color: COLORS.lightGray,
        marginBottom: 5,
        alignSelf: 'flex-start',
        width: '100%', // Ensure label takes full width for alignment
   },
  input: {
    width: '100%',
    marginBottom: 5, // Less space before hint
  },
   passwordHint: {
      color: COLORS.lightGray,
      fontSize: 12,
      marginBottom: 20, // Space before next input
      alignSelf: 'flex-start',
      width: '100%',
      paddingLeft: 5, // Small indent
  },
  confirmButton: {
    marginTop: 30,
    width: '100%', // Make button wider
    backgroundColor: COLORS.tertiary, // Match mockup button color
  },
});

export default ForgotPasswordScreen;