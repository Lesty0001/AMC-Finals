import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [showAccountType, setShowAccountType] = useState(false);

  const handleNext = () => {
     if (!emailOrPhone) {
        alert('Please enter your Email or Phone');
        return;
     }
    setShowAccountType(true); // Show driver/passenger options
  };

  const handleSelectAccountType = (type) => {
    if (type === 'Driver') {
      navigation.navigate('SignUpDriver', { identifier: emailOrPhone });
    } else {
      navigation.navigate('SignUpPassenger', { identifier: emailOrPhone });
    }
  };

   const handleForgotEmail = () => {
    alert('Forgot Email functionality not implemented yet.');
  };

   const handleGoBack = () => {
       if (showAccountType) {
           setShowAccountType(false);
       } else {
           navigation.goBack(); // Or navigate back to Login explicitly
       }
   }

   return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
         {/* Consider adding a Back button here */}
         {/* <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
             <MaterialCommunityIcons name="arrow-left" size={24} color={COLORS.white} />
         </TouchableOpacity> */}

        <Image source={require('../assets/jeep2go.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.signInText}>Sign in</Text>
        <Text style={styles.subText}>with your account</Text>

        <StyledInput
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType="email-address"
          style={styles.input}
          editable={!showAccountType} // Disable input when options are shown
        />

        <TouchableOpacity onPress={handleForgotEmail}>
          <Text style={styles.linkText}>Forgot Email?</Text>
        </TouchableOpacity>

        {showAccountType && (
             <View style={styles.accountTypeContainer}>
                <Text style={styles.createAccountLabel}>Create Account</Text>
                <StyledButton title="For Driver" onPress={() => handleSelectAccountType('Driver')} style={styles.typeButton}/>
                <StyledButton title="For Passenger" onPress={() => handleSelectAccountType('Passenger')} style={styles.typeButton}/>
             </View>
        )}


        <View style={styles.bottomContainer}>
           <TouchableOpacity onPress={handleGoBack}>
              {/* Show Create Account text or Back text depending on state */}
             <Text style={styles.linkText}>{showAccountType ? 'Back' : 'Log In Instead'}</Text>
           </TouchableOpacity>
           {!showAccountType && ( // Only show Next if account types aren't visible
             <StyledButton title="Next" onPress={handleNext} style={styles.nextButton} />
           )}
           {showAccountType && <View style={{ width: 120 }} />} {/* Placeholder to keep layout consistent */}
        </View>

      </ScrollView>
     </KeyboardAvoidingView>
  );
};

// Add styles similar to LoginScreen, adjusting as needed
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
    marginBottom: 10,
    alignSelf: 'flex-start',
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
    alignSelf: 'flex-start',
    marginBottom: 20, // Adjusted margin
  },
   accountTypeContainer: {
       width: '100%',
       marginTop: 20,
       alignItems: 'flex-start', // Align buttons left
   },
   createAccountLabel: {
       color: COLORS.lightGray,
       fontSize: 16,
       marginBottom: 10,
   },
   typeButton: {
       width: '100%', // Make buttons full width within their container
       marginBottom: 10,
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


export default CreateAccountScreen;