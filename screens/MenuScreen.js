import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const MenuScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
      // Navigate to a confirmation screen or show modal
      navigation.navigate('Logout');
  };

  return (
    <View style={styles.container}>
        {/* Simple Header */}
        <View style={styles.header}>
            <MaterialCommunityIcons name="menu" size={28} color={COLORS.white} style={{marginRight: 10}} />
            <Text style={styles.headerTitle}>Menu</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuItemsContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Account')}>
                <MaterialCommunityIcons name="account-circle-outline" size={24} color={COLORS.primary} style={styles.menuIcon} />
                <Text style={styles.menuItemText}>Account</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.primary} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
                 <MaterialCommunityIcons name="cog-outline" size={24} color={COLORS.primary} style={styles.menuIcon} />
                <Text style={styles.menuItemText}>Settings</Text>
                 <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.primary} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Language')}>
                 <MaterialCommunityIcons name="translate" size={24} color={COLORS.primary} style={styles.menuIcon} />
                <Text style={styles.menuItemText}>Language</Text>
                 <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.primary} />
            </TouchableOpacity>

             <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                 <MaterialCommunityIcons name="logout" size={24} color={COLORS.primary} style={styles.menuIcon} />
                <Text style={styles.menuItemText}>Log out</Text>
                 <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.primary} />
            </TouchableOpacity>
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
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    flex: 1,
  },
  menuItemsContainer: {
      padding: 20,
  },
  menuItem: {
      backgroundColor: COLORS.white, // White background for items
      borderRadius: 10,
      paddingVertical: 18,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
  },
  menuIcon: {
      marginRight: 15,
  },
  menuItemText: {
      flex: 1, // Take available space
      fontSize: 16,
      color: COLORS.primary,
      fontWeight: '500',
  },
});

export default MenuScreen;