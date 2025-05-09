// screens/LoginPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const LoginPasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { identifier } = route.params;
  const { login } = useAuth(); // Get the login function from context

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!password) {
      alert('Please enter your password');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // On successful login:
      console.log(`Logging in with: ${identifier} and password: ${password}`);

      // *** CHANGE THIS PART ***
      // Instead of navigation.reset, call the login function from context
      login();
      // No need to manually navigate here, the state change in App.js handles it.
      // *************************

    }, 1500);
  };

  const handleForgotPassword = () => {
    // Navigate to OTP screen first in your flow
    navigation.navigate('ForgotPasswordOTP', { email: identifier }); // Pass email if it's an email
    // Or directly to ForgotPassword if OTP is handled there
    // navigation.navigate('ForgotPassword');
  };

   return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/jeep2go.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.signInText}>Signing in as {identifier}</Text>

        <Text style={styles.label}>Enter your password</Text>
        <StyledInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          isPassword={true} // Enables secure text and toggle
          style={styles.input}
        />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
           {/* Optional: Back button */}
           {/* <StyledButton title="Back" onPress={() => navigation.goBack()} variant="secondary" /> */}
           <View style={{flex: 1}} /> {/* Spacer */}
           <StyledButton
              title="Next"
              onPress={handleLogin}
              style={styles.nextButton}
              loading={loading}
              disabled={loading}
            />
        </View>

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
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
  },
  logo: {
    width: 180,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  signInText: {
      fontSize: 16,
      color: COLORS.lightGray,
      marginBottom: 40,
      alignSelf: 'flex-start',
   },
   label: {
        fontSize: 16,
        color: COLORS.lightGray,
        marginBottom: 5,
        alignSelf: 'flex-start',
   },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  linkText: {
    color: COLORS.secondary,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align Next button to the right
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
  },
   nextButton: {
       minWidth: 120,
   }
});

export default LoginPasswordScreen;