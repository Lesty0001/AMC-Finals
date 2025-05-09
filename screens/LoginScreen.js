import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleNext = () => {
    // Basic validation (optional)
    if (!emailOrPhone) {
      alert('Please enter your Email or Phone');
      return;
    }
    // Navigate to password screen, passing the email/phone
    navigation.navigate('LoginPassword', { identifier: emailOrPhone });
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const handleForgotEmail = () => {
    // Navigate to a potential "Forgot Email" screen or show help
    alert('Forgot Email functionality not implemented yet.');
  };

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/jeep2go.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.signInText}>Sign in</Text>
        <Text style={styles.subText}>with your account</Text>

        <StyledInput
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType="email-address" // Adjust based on actual input type needed
          style={styles.input}
        />

        <TouchableOpacity onPress={handleForgotEmail}>
          <Text style={styles.linkText}>Forgot Email?</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
           <TouchableOpacity onPress={handleCreateAccount}>
             <Text style={styles.linkText}>Create Account</Text>
           </TouchableOpacity>
           <StyledButton title="Next" onPress={handleNext} style={styles.nextButton} />
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
    paddingTop: 80, // Adjust as needed
    paddingBottom: 40,
  },
  logo: {
    width: 180,
    height: 80, // Adjust aspect ratio
    resizeMode: 'contain',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align left
  },
  signInText: {
      fontSize: 24,
      color: COLORS.white,
      marginBottom: 5,
      alignSelf: 'flex-start',
  },
   subText: {
      fontSize: 16,
      color: COLORS.lightGray,
      marginBottom: 30,
      alignSelf: 'flex-start',
   },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  linkText: {
    color: COLORS.secondary,
    fontSize: 14,
    alignSelf: 'flex-start', // Align forgot email link left
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto', // Push to bottom
  },
   nextButton: {
       minWidth: 120,
   }
});

export default LoginScreen;