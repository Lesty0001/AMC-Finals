import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default

  const languages = ['English', 'Filipino'];
  const otherLanguages = ['Korea', 'Vietnam', 'Cebuano']; // Example "downloadable"

  const handleSelectLanguage = (lang) => {
      setSelectedLanguage(lang);
      // Add logic to actually change app language (e.g., using i18n library)
      console.log(`Language selected: ${lang}`);
      // Maybe navigate back automatically or show confirmation
      // navigation.goBack();
  };

  const handleDownloadLanguage = (lang) => {
      alert(`Download ${lang} language pack? (Not Implemented)`);
  };

  return (
    <View style={styles.container}>
         {/* Simple Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
               <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.white} />
           </TouchableOpacity>
            <MaterialCommunityIcons name="translate" size={26} color={COLORS.white} style={{marginRight: 10}} />
            <Text style={styles.headerTitle}>Your Language</Text>
            <View style={{ width: 28 }} />{/* Spacer */}
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.sectionTitle}>Default</Text>
            {languages.map((lang) => (
                 <TouchableOpacity
                    key={lang}
                    style={[
                        styles.languageItem,
                        selectedLanguage === lang && styles.selectedLanguageItem
                    ]}
                    onPress={() => handleSelectLanguage(lang)}
                >
                    <Text style={[
                        styles.languageItemText,
                         selectedLanguage === lang && styles.selectedLanguageItemText
                         ]}>{lang}</Text>
                    {selectedLanguage === lang && (
                         <MaterialCommunityIcons name="check-circle" size={24} color={COLORS.primary} />
                    )}
                </TouchableOpacity>
            ))}

            <Text style={styles.sectionTitle}>Other (Download File)</Text>
             {otherLanguages.map((lang) => (
                 <TouchableOpacity
                    key={lang}
                    style={styles.languageItem} // Style as non-selected initially
                    onPress={() => handleDownloadLanguage(lang)} // Trigger download on press
                >
                    <Text style={styles.languageItemText}>{lang}</Text>
                    {/* Optionally show a download icon */}
                     <MaterialCommunityIcons name="download-circle-outline" size={24} color={COLORS.darkGray} />
                </TouchableOpacity>
            ))}

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
  },
  sectionTitle: {
    fontSize: 16,
    color: COLORS.lightGray,
    marginBottom: 10,
    marginTop: 15, // Space between sections
  },
  languageItem: {
      backgroundColor: COLORS.white,
      borderRadius: 10,
      paddingVertical: 18,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      borderWidth: 2,
      borderColor: COLORS.white, // Default border same as background
  },
  selectedLanguageItem: {
      borderColor: COLORS.secondary, // Highlight border for selected
      backgroundColor: COLORS.secondary + '30', // Slightly tinted background
  },
  languageItemText: {
      fontSize: 16,
      color: COLORS.primary,
      fontWeight: '500',
  },
   selectedLanguageItemText: {
       fontWeight: 'bold', // Make selected text bold
   },
});

export default LanguageScreen;