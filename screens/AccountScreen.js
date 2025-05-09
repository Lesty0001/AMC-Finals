import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const AccountScreen = () => {
  const navigation = useNavigation();

  const handleDeleteAccount = () => {
      // Show confirmation dialog first
      alert('Confirm: Delete Account? (Not Implemented)');
  };

  return (
    <View style={styles.container}>
         {/* Simple Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
               <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.white} />
            </TouchableOpacity>
            <MaterialCommunityIcons name="account-circle-outline" size={26} color={COLORS.white} style={{marginRight: 10}} />
            <Text style={styles.headerTitle}>Your Account</Text>
            <View style={{ width: 28 }} />{/* Spacer */}
        </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
         <View style={styles.profileInfoContainer}>
             <MaterialCommunityIcons name="account-circle" size={80} color={COLORS.primary} style={styles.profileIcon}/>
             <Text style={styles.infoLabel}>Passenger Name:</Text>
             <Text style={styles.infoValue}>John Doe</Text>
             <Text style={styles.infoLabel}>Birthday:</Text>
             <Text style={styles.infoValue}>mm/dd/yyyy</Text>
             <Text style={styles.infoLabel}>Account Created:</Text>
             <Text style={styles.infoValue}>mm/dd/yyyy</Text>
         </View>

        <StyledButton
            title="Edit Information"
            onPress={() => alert('Navigate to Edit Profile Screen (Not Implemented)')}
            style={styles.actionButton}
            variant="secondary" // Use secondary style
        />
         <StyledButton
            title="Change Password"
            onPress={() => alert('Navigate to Change Password Screen (Not Implemented)')}
            style={styles.actionButton}
            variant="secondary"
        />
         <StyledButton
            title="Delete Account"
            onPress={handleDeleteAccount}
            style={[styles.actionButton, styles.deleteButton]} // Specific style for delete
            textStyle={styles.deleteButtonText}
             variant="secondary" // Base style is secondary
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
   header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? 25 : 50,
      paddingBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: COLORS.primary,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.darkGray,
  },
   backButton: {
     padding: 5,
     marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center', // Center the content
  },
   profileInfoContainer: {
       backgroundColor: COLORS.secondary, // Light blue background
       borderRadius: 15,
       padding: 20,
       width: '100%', // Take full width
       alignItems: 'center', // Center items inside
       marginBottom: 30,
   },
   profileIcon: {
       marginBottom: 15,
   },
   infoLabel: {
       color: COLORS.darkGray,
       fontSize: 14,
       marginTop: 8,
   },
   infoValue: {
       color: COLORS.primary,
       fontSize: 16,
       fontWeight: '500',
       marginBottom: 5,
   },
   actionButton: {
       width: '90%', // Buttons take most of the width
       marginBottom: 15,
       backgroundColor: COLORS.lightGray, // Greyish background for buttons
       borderColor: COLORS.secondary, // Blue border
   },
   deleteButton: {
       borderColor: COLORS.red, // Red border for delete
       // backgroundColor: 'transparent', // Optional: make bg transparent
   },
   deleteButtonText: {
       color: COLORS.red, // Red text for delete
   },
});

export default AccountScreen;