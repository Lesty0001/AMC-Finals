import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [allowNotification, setAllowNotification] = useState(true);
  const [allowAudio, setAllowAudio] = useState(true);
  const [allowLocation, setAllowLocation] = useState(true);

  return (
    <View style={styles.container}>
        {/* Simple Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
               <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.white} />
           </TouchableOpacity>
            <MaterialCommunityIcons name="cog-outline" size={26} color={COLORS.white} style={{marginRight: 10}} />
            <Text style={styles.headerTitle}>Settings</Text>
            <View style={{ width: 28 }} />{/* Spacer */}
        </View>

        {/* Settings Items */}
        <View style={styles.settingsItemsContainer}>
            <View style={styles.settingItem}>
                <Text style={styles.settingItemText}>Allow Notification</Text>
                <Switch
                    trackColor={{ false: COLORS.gray, true: COLORS.tertiary }}
                    thumbColor={allowNotification ? COLORS.secondary : COLORS.lightGray}
                    ios_backgroundColor={COLORS.gray}
                    onValueChange={() => setAllowNotification(previousState => !previousState)}
                    value={allowNotification}
                />
            </View>
             <View style={styles.settingItem}>
                <Text style={styles.settingItemText}>Audio</Text>
                 <Switch
                    trackColor={{ false: COLORS.gray, true: COLORS.tertiary }}
                    thumbColor={allowAudio ? COLORS.secondary : COLORS.lightGray}
                    ios_backgroundColor={COLORS.gray}
                    onValueChange={() => setAllowAudio(previousState => !previousState)}
                    value={allowAudio}
                />
            </View>
             <View style={styles.settingItem}>
                <Text style={styles.settingItemText}>Allow Location</Text>
                 <Switch
                    trackColor={{ false: COLORS.gray, true: COLORS.tertiary }}
                    thumbColor={allowLocation ? COLORS.secondary : COLORS.lightGray}
                    ios_backgroundColor={COLORS.gray}
                    onValueChange={() => setAllowLocation(previousState => !previousState)}
                    value={allowLocation}
                />
            </View>

             <TouchableOpacity style={styles.settingItemButton} onPress={() => alert('Reset to Default Settings? (Not Implemented)')}>
                <Text style={styles.settingItemText}>Reset to Default</Text>
                 <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.primary} />
            </TouchableOpacity>

             <StyledButton
                title="Check for Updates"
                onPress={() => alert('Checking for updates... (Not Implemented)')}
                style={styles.updateButton}
                variant="secondary"
            />

        </View>
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
   settingsItemsContainer: {
      padding: 20,
  },
  settingItem: {
      backgroundColor: COLORS.white,
      borderRadius: 10,
      paddingVertical: 15, // Adjust padding for switch height
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Space between text and switch/chevron
      marginBottom: 15,
  },
  settingItemButton: { // Style like an item but behave like button
      backgroundColor: COLORS.white,
      borderRadius: 10,
      paddingVertical: 18,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
  },
  settingItemText: {
      fontSize: 16,
      color: COLORS.primary,
      fontWeight: '500',
  },
   updateButton: {
       marginTop: 30,
       backgroundColor: COLORS.lightGray,
       borderColor: COLORS.secondary,
   },
});


export default SettingsScreen;