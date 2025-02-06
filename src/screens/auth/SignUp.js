import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fs,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../components/CustomTextInput';
import color from '../../assets/color';
import {RadioButton} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedCode, setSelectedCode] = useState('+91');
  const [referralCode, setReferralCode] = useState('');
  const [checked, setChecked] = useState('India');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.backButtonImg}
          source={require('../../assets/images/arrow-right.png')}
        />
      </TouchableOpacity>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/images/createAc.png')}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Create your Account</Text>
      <Text style={styles.subtitle}>
        Join our community and Experience a seamless
      </Text>
      <Text style={[styles.subtitle, {marginBottom: hp(4)}]}>
        finding your relationship
      </Text>

      {/* Full Name */}
      <CustomTextInput
        label="Full Name"
        placeholder="Full Name"
        value={fullName}
        setValue={setFullName}
      />

      {/* Email Address */}
      <CustomTextInput
        label="Email Address"
        placeholder="Email Address"
        value={email}
        setValue={setEmail}
        keyboardType="email-address"
      />

      {/* Mobile Number with Country Code */}
      <CustomTextInput
        label="Mobile Number"
        placeholder="Mobile Number"
        value={mobile}
        setValue={setMobile}
        isMobile
        selectedCode={selectedCode}
        setSelectedCode={setSelectedCode}
      />

      {/* Referral Code */}
      <CustomTextInput
        label="Referral Code (Optional)"
        placeholder="Referral Code (Optional)"
        value={referralCode}
        setValue={setReferralCode}
      />
      {/* Country Selection */}
      <Text style={styles.label}>Country</Text>
      <View style={styles.radioGroup}>
        <RadioButton
          value="India"
          status={checked === 'India' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('India')}
          color="white"
        />
        <Text style={styles.radioLabel}>India</Text>

        <RadioButton
          value="Other"
          status={checked === 'Other' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Other')}
          color="white"
        />
        <Text style={styles.radioLabel}>Other</Text>
      </View>

      <CustomButton title="Create Account" />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.alreadyText}>
          Already have an account? <Text style={styles.loginText}>Login!</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blackBg,
    alignItems: 'center',
    padding: wp(5),
  },
  backButton: {
    position: 'absolute',
    top: hp(5),
    left: wp(5),
    zIndex: 10,
  },
  backButtonImg: {
    width: wp(12),
    height: wp(5),
    resizeMode: 'contain',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: hp(2),
    marginTop: hp(6),
  },
  avatar: {
    width: wp(50),
    height: wp(30),
    borderRadius: wp(10),
  },
  title: {
    fontSize: fs(3.5),
    fontWeight: 'bold',
    color: color.white,
    textAlign: 'center',
    marginVertical: hp(1),
  },
  subtitle: {
    fontSize: fs(1.7),
    color: color.white,
    textAlign: 'center',
    marginBottom: hp(2),
    width: wp(98),
    fontWeight: '300',
  },

  footerText: {
    color: color.white,
    fontSize: fs(2),
  },
  loginText: {
    color: color.darkRed,
    fontWeight: 'bold',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    alignSelf: 'flex-start',
    marginLeft: wp(5),
  },
  radioLabel: {
    color: 'white',
    fontSize: fs(2),
    marginRight: wp(1),
  },
  label: {
    fontSize: fs(2),
    color: color.white,
    alignSelf: 'flex-start',
    marginBottom: hp(0.5),
    marginLeft: wp(5),
  },
  loginButton: {alignSelf: 'center'},
  alreadyText: {fontSize: fs(2), color: color.white},
});

export default SignUp;
