import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const StyledInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
  iconName, // Optional icon on the left
  isPassword = false, // Specific flag for password fields to show toggle
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <MaterialCommunityIcons name={iconName} size={22} color={COLORS.darkGray} style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.darkGray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword ? !isPasswordVisible : secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <MaterialCommunityIcons
            name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={COLORS.darkGray}
          />
        </TouchableOpacity>
      )}
      {/* Simple Calendar Icon Placeholder */}
      {placeholder && placeholder.toLowerCase().includes('birthday') && (
         <MaterialCommunityIcons name="calendar" size={22} color={COLORS.darkGray} style={styles.eyeIcon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 8,
    height: 50, // Fixed height
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%', // Fill container height
    fontSize: 16,
    color: COLORS.primary,
  },
  eyeIcon: {
    padding: 5, // Increase tappable area
  },
});

export default StyledInput;