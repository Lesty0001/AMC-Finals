import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/colors';

const StyledButton = ({ title, onPress, style, textStyle, variant = 'primary', disabled = false, loading = false }) => {
  const buttonStyles = [
    styles.button,
    variant === 'secondary' ? styles.secondaryButton : styles.primaryButton,
    disabled || loading ? styles.disabledButton : {},
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'secondary' ? styles.secondaryText : styles.primaryText,
    textStyle,
  ];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={variant === 'secondary' ? COLORS.primary : COLORS.white} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    minWidth: 100,
  },
  primaryButton: {
    backgroundColor: COLORS.secondary,
  },
  secondaryButton: {
    backgroundColor: COLORS.lightGray, // Or maybe transparent with border
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  disabledButton: {
    backgroundColor: COLORS.gray,
    borderColor: COLORS.gray,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: COLORS.primary,
  },
  secondaryText: {
     color: COLORS.primary,
  },
});

export default StyledButton;