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

const Login = ({navigation}) => {
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

      <Text style={styles.title}>Welcome Back!</Text>

      <Text style={[styles.subtitle, {marginBottom: hp(4)}]}>
        Please enter your details to sign in
      </Text>

      {/* Mobile Number with Country Code */}
      <View style={{marginTop: hp(7)}}>
        <CustomTextInput
          label="Mobile Number"
          placeholder="Mobile Number"
          value={mobile}
          setValue={setMobile}
          isMobile
          selectedCode={selectedCode}
          setSelectedCode={setSelectedCode}
        />
      </View>

      <View style={{position: 'absolute', bottom: hp(20)}}>
        <CustomButton title="Proceed Securely" />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.alreadyText}>
            Don't have an account? <Text style={styles.loginText}>Create Account!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blackBg,
    alignItems: 'center',
    padding: wp(5),
    flex: 1,
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
    marginTop: hp(8),
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
    marginTop: hp(2),
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
  loginButton: {marginTop: hp(2),alignSelf:'center'},
  alreadyText: {fontSize: fs(2), color: color.white},
});

export default Login;
