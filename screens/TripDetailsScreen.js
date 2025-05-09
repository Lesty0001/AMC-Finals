import React, { useState } from 'react';
// Import ScrollView here
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const TopUpScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [currentBalance, setCurrentBalance] = useState(55342); // Example balance
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTopUp = () => {
      const topUpValue = parseFloat(amount);
      if (isNaN(topUpValue) || topUpValue <= 0) {
          alert('Please enter a valid amount.');
          return;
      }

      setLoading(true);
      // Simulate API call
      setTimeout(() => {
         const newBalance = currentBalance + topUpValue;
         setCurrentBalance(newBalance);
         setLoading(false);
         setShowSuccess(true);
         // Keep the success message for a few seconds
         setTimeout(() => {
             setShowSuccess(false);
             setAmount(''); // Clear input after success
         }, 2500);
      }, 1500);
  };

   // Format amount with commas for display in success message
   const formatNumber = (num) => {
       return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
   };

  return (
    <View style={styles.container}>
      {/* Simple Header */}
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
               <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.white} />
           </TouchableOpacity>
          <MaterialCommunityIcons name="credit-card-plus-outline" size={26} color={COLORS.white} style={{marginRight: 10}} />
          <Text style={styles.headerTitle}>Top-up</Text>
          <View style={{ width: 28 }} />{/* Spacer */}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.balanceDisplay}>
              <Text style={styles.balanceLabel}>Balance</Text>
              <Text style={styles.balanceAmount}>₱{formatNumber(currentBalance.toFixed(2))}</Text>
          </View>

          <TouchableOpacity style={styles.paymentMethod}>
              <Text style={styles.paymentLabel}>Way of Payment</Text>
              <Text style={styles.paymentValue}>GCash</Text>
              <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.primary} />
          </TouchableOpacity>

          <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Input Value</Text>
                <View style={styles.amountInputWrapper}>
                    <Text style={styles.currencySymbol}>₱</Text>
                    <TextInput
                        style={styles.amountInput}
                        placeholder="0"
                        placeholderTextColor={COLORS.primary + '80'} // Lighter placeholder
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                        editable={!showSuccess && !loading} // Disable when showing success or loading
                    />
                </View>
          </View>

          {/* Success Message Overlay */}
          {showSuccess && (
             <View style={styles.successOverlay}>
                  <TouchableOpacity style={styles.closeButton} onPress={() => setShowSuccess(false)}>
                      <MaterialCommunityIcons name="close" size={24} color={COLORS.primary} />
                  </TouchableOpacity>
                  <Text style={styles.successText}>
                      You've successfully topped-up ₱{formatNumber(parseFloat(amount).toFixed(2))}
                  </Text>
             </View>
          )}

      </ScrollView>

       {/* Top-up Button Area */}
       <View style={styles.buttonContainer}>
          <StyledButton
                title="Top-up"
                onPress={handleTopUp}
                disabled={showSuccess || loading || !amount}
                loading={loading}
            />
       </View>
    </View>
  );
};

// Styles remain the same, ScrollView usage will now work
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
    flex: 1, // Take remaining space
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1, // Ensure it takes height
  },
   balanceDisplay: {
       backgroundColor: COLORS.secondary,
       paddingVertical: 15,
       paddingHorizontal: 20,
       borderRadius: 15,
       marginBottom: 20,
   },
   balanceLabel: {
       color: COLORS.primary,
       fontSize: 14,
       marginBottom: 5,
   },
   balanceAmount: {
       color: COLORS.primary,
       fontSize: 24,
       fontWeight: 'bold',
   },
   paymentMethod: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   },
   paymentLabel: {
       color: COLORS.darkGray,
       fontSize: 14,
   },
   paymentValue: {
       color: COLORS.primary,
       fontSize: 16,
       fontWeight: 'bold',
       flex: 1, // Push chevron right
       textAlign: 'right',
       marginRight: 10,
   },
   inputContainer: {
       backgroundColor: COLORS.secondary,
       paddingVertical: 25, // More padding
       paddingHorizontal: 20,
       borderRadius: 15,
       marginBottom: 20,
       alignItems: 'center', // Center input stuff
   },
   inputLabel: {
       color: COLORS.darkGray,
       fontSize: 14,
       marginBottom: 10,
   },
   amountInputWrapper: {
       flexDirection: 'row',
       alignItems: 'center',
   },
   currencySymbol: {
       color: COLORS.primary,
       fontSize: 36, // Large symbol
       fontWeight: 'bold',
       marginRight: 5,
   },
   amountInput: {
        color: COLORS.primary,
        fontSize: 48, // Large input text
        fontWeight: 'bold',
        minWidth: 100, // Ensure space for typing
        textAlign: 'center',
        paddingVertical: 0, // Remove default padding if any
   },
    successOverlay: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 20,
        marginVertical: 20, // Space it out
        alignItems: 'center',
        position: 'relative', // For absolute positioning of close button
        borderWidth: 2,
        borderColor: COLORS.green,
   },
   closeButton: {
       position: 'absolute',
       top: 10,
       right: 10,
   },
   successText: {
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
   },
    buttonContainer: {
        paddingHorizontal: 30,
        paddingBottom: Platform.OS === 'ios' ? 30 : 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: COLORS.darkGray,
        backgroundColor: COLORS.primary,
    }
});

export default TopUpScreen;