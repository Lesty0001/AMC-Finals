import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const ForgotPasswordOTPScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Assuming email is passed to this screen

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = () => {
    if (!otp || otp.length < 4) {
      // Basic OTP length check
      alert('Please enter the verification code.');
      return;
    }
    setLoading(true);
    console.log(`Verifying OTP: ${otp} for email: ${email}`);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      // On successful verification:
      navigation.navigate('ForgotPassword'); // Navigate to set new password screen
    }, 1500);
  };

  const handleResendCode = () => {
    // Add logic to resend OTP
    alert('Resending code...');
  };

  const handleLearnMore = () => {
    alert("Learn more about why you didn't get the code.");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/jeep2go.png')} style={styles.logo} />

        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subText}>
          We sent a verification code to {email}
        </Text>

        <Text style={styles.label}>Enter the verification code</Text>
        <View style={styles.otpContainer}>
          <StyledInput
            placeholder="Verification Code"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            style={styles.input}
            maxLength={6} // Set max OTP length
          />
          <StyledButton
            title="Resend Code"
            onPress={handleResendCode}
            style={styles.resendButton}
            textStyle={styles.resendButtonText}
          />
        </View>

        <TouchableOpacity onPress={handleLearnMore}>
          <Text style={styles.linkText}>
            Didn't get the code?{' '}
            <Text style={{ fontWeight: 'bold' }}>Learn more.</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <View style={{ flex: 1 }} /> {/* Spacer */}
          <StyledButton
            title="Next"
            onPress={handleVerifyOtp}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  subText: {
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
    width: '100%',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    flex: 1, // Take available space before button
    marginRight: 10, // Space between input and button
  },
  resendButton: {
    backgroundColor: COLORS.gray, // Different style for resend
    paddingVertical: 15, // Match input height
    height: 50,
    borderRadius: 10, // Less rounded?
  },
  resendButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  linkText: {
    color: COLORS.secondary,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
  },
  nextButton: {
    minWidth: 120,
  },
});

export default ForgotPasswordOTPScreen;
