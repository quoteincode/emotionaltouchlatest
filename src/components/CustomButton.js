// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { responsiveHeight as hp, responsiveWidth as wp } from 'react-native-responsive-dimensions';
import color from '../assets/color';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp(80),
    height: hp(6),
    backgroundColor: color.darkRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    marginBottom: hp(2),
    alignSelf: 'center',
  },
  buttonText: {
    color: color.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;
