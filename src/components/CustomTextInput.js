import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fs,
} from 'react-native-responsive-dimensions';
import color from '../assets/color';

const countryCodes = [
  {label: '+91', value: '+91'},
  {label: '+1', value: '+1'},
  {label: '+44', value: '+44'},
  {label: '+61', value: '+61'},
];

const CustomTextInput = ({
  label,
  placeholder,
  value,
  setValue,
  keyboardType,
  isMobile,
  selectedCode,
  setSelectedCode,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>

      {isMobile ? (
        <View style={styles.inputContainer}>
          <Dropdown
            data={countryCodes}
            value={selectedCode}
            onChange={item => setSelectedCode(item.value)}
            style={styles.dropdown}
            placeholderStyle={styles.dropdownText}
            selectedTextStyle={styles.dropdownText}
            containerStyle={styles.dropdownContainer}
            itemTextStyle={{color: 'black'}}
            labelField="label"
            valueField="value"
          />
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor="#A9A9A9"
            keyboardType="numeric"
            style={styles.dropdowninput}
          />
        </View>
      ) : (
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor="#A9A9A9"
          keyboardType={keyboardType}
          style={styles.input}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    marginBottom: hp(4),
  },
  borderContainer: {
    position: 'absolute',
    top: -hp(1),
    left: wp(5),
    backgroundColor: color.blackBg,
    paddingHorizontal: wp(1),
    zIndex: 1,
  },
  label: {
    fontSize: fs(1.8),
    color:  color.white,
  },
  input: {
    width: '100%',
    height: hp(7),
    borderWidth: 1.5,
    borderColor: color.gray,
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    fontSize: fs(2),
    color: color.white,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor:  color.gray,
    borderRadius: wp(2),
    backgroundColor: color.blackBg,
    width: '100%',
  },
  dropdown: {
    width: wp(18),
    paddingLeft: wp(3),
    borderRightWidth: 1,
    borderRightColor: color.white,
    height: hp(6),
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: fs(2),
    color: color.white,fontWeight:'bold'
  },
  dropdownContainer: {
    backgroundColor: color.white,
    borderRadius: wp(2),width:wp(20)
  },
  dropdowninput: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: fs(2),
    height: hp(6),
    paddingHorizontal: wp(3),
    color: 'white',
  },
});

export default CustomTextInput;
