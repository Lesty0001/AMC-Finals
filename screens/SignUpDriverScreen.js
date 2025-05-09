// screens/SignUpPassengerScreen.js (SignUpDriver is analogous)
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

// Reusable File Upload Button Component (can be moved to components/)
const FileUploadButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.uploadButton} onPress={onPress}>
        <Text style={styles.uploadButtonText}>{title}</Text>
        <Text style={styles.uploadHint}>Only .jpg & .png Files</Text>
        <MaterialCommunityIcons name="upload" size={20} color={COLORS.primary} style={styles.uploadIcon} />
    </TouchableOpacity>
);

const SignUpPassengerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const { identifier } = route.params; // Email/Phone from previous screen

  // --- State for all form fields ---
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState(''); // Format: mm/dd/yyyy
  const [email, setEmail] = useState(route.params?.identifier || ''); // Pre-fill if available
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (type) => {
      // Placeholder for file picking logic (e.g., using Expo ImagePicker)
      alert(`Upload functionality for ${type} not implemented.`);
  };

  const handleSubmit = () => {
      // --- Add Validation Logic Here ---
      if (!surname || !firstName || !age || !address || !birthday || !email || !phone || !password || !confirmPassword) {
          alert('Please fill in all required fields.');
          return;
      }
      if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
      }
      // Basic email validation
       if (!/\S+@\S+\.\S+/.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }
      // Add password complexity validation if needed based on the hint text

      setLoading(true);
      console.log("Submitting Passenger Signup:", { surname, firstName, middleName, age, address, birthday, email, phone /* add ID info */ });
      // Simulate API Call
      setTimeout(() => {
          setLoading(false);
          alert('Account Created Successfully!');
          // Navigate to Login or Home after successful signup
          navigation.navigate('Login');
      }, 1500);
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.white} />
            </TouchableOpacity>
            {/* Optional: Add Logo here? */}
            <Text style={styles.headerTitle}>Sign Up</Text>
            <View style={{ width: 28 }} />{/* Spacer */}
        </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* --- Personal Information --- */}
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <StyledInput placeholder="Surname" value={surname} onChangeText={setSurname} />
        <StyledInput placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <StyledInput placeholder="Middle Name" value={middleName} onChangeText={setMiddleName} />
        <StyledInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
        <StyledInput placeholder="Address" value={address} onChangeText={setAddress} />
        <StyledInput
            placeholder="Birthday: mm / dd / yyyy"
            value={birthday}
            onChangeText={setBirthday}
            // keyboardType="numeric" // Can be tricky with slashes
        />

        {/* --- Identity Confirmation --- */}
        <Text style={styles.sectionTitle}>Identity Confirmation:</Text>
        <FileUploadButton title="Valid ID: Upload Files +" onPress={() => handleFileUpload('Valid ID')} />
        <FileUploadButton title="Student ID: Upload Files +" onPress={() => handleFileUpload('Student ID')} />
        <FileUploadButton title="Senior Citizen ID: Upload Files +" onPress={() => handleFileUpload('Senior ID')} />
        <FileUploadButton title="Person with Disability ID: Upload Files +" onPress={() => handleFileUpload('PWD ID')} />

         {/* --- Account Information --- */}
        <Text style={styles.sectionTitle}>Account Information</Text>
        <StyledInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        {/* Add validation hint if needed */}
        <StyledInput placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <StyledInput
             placeholder="Password"
             value={password}
             onChangeText={setPassword}
             isPassword={true}
        />
         <Text style={styles.passwordHint}>
             Password must contain uppercase letters, lowercase letters, numbers and special characters
         </Text>
        <StyledInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword={true}
         />
         <Text style={styles.passwordHint}>Re-enter your password</Text>


        <StyledButton
            title="Submit"
            onPress={handleSubmit}
            style={styles.submitButton}
            loading={loading}
            disabled={loading}
        />

      </ScrollView>
    </View>
  );
};

// --- Styles --- (Make these comprehensive)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: Platform.OS === 'android' ? 25 : 50, // Adjust for status bar
      paddingBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: COLORS.primary, // Same as background or slightly different
      borderBottomWidth: 1,
      borderBottomColor: COLORS.darkGray,
  },
  backButton: {
     padding: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 25,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: COLORS.lightGray, // Or secondary color
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uploadButtonText: {
      color: COLORS.primary,
      fontSize: 15,
      fontWeight: '500',
      flex: 1, // Take available space
  },
   uploadHint: {
       color: COLORS.darkGray,
       fontSize: 10,
       position: 'absolute',
       bottom: -12, // Position hint below button
       left: 15,
   },
  uploadIcon: {
    marginLeft: 10,
  },
  passwordHint: {
      color: COLORS.lightGray,
      fontSize: 12,
      marginLeft: 15, // Align with input text start
      marginBottom: 10,
      marginTop: -5, // Reduce space after input
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: COLORS.tertiary, // Use the greenish button color from mockup
  },
});

export default SignUpPassengerScreen; // Change export for SignUpDriverScreen