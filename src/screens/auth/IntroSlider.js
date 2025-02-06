import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fs,
} from 'react-native-responsive-dimensions';
import color from '../../assets/color';

const slides = [
  {
    id: 1,
    title: 'Find Your Missing Piece',
    description: 'You can connect with listeners to share your feelings.',
    image: require('../../assets/images/onboarding1.png'),
  },
  {
    id: 2,
    title: '1914 translation by H. Rackham',
    description: 'You can connect with listeners to share your feelings.',
    image: require('../../assets/images/onboarding1.png'),
  },
  {
    id: 3,
    title: 'Talk to your Problem Listener',
    description: 'You can connect with listeners to share your feelings.',
    image: require('../../assets/images/onboarding3.png'),
  },
];

const IntroSlider = ({navigation}) => {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.wrapper}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        activeDotColor={color.darkRed}
        activeDotStyle={{width: wp(4)}}
        dotColor={color.brownDusty}
        onIndexChanged={i => setIndex(i)}>
        {slides.map((slide, i) => (
          <View key={slide.id} style={styles.container}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>

            {/* First Page */}
            {i === 0 && (
              <TouchableOpacity
                style={[styles.nextButton, styles.fullWidthButton]}
                onPress={() => swiperRef.current.scrollBy(1)}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            )}

            {/* Second Page */}
            {i === 1 && (
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.equalButton, {backgroundColor: '#323232'}]}
                  onPress={() => swiperRef.current.scrollBy(-1)}>
                  <Text style={styles.nextText}>Previous</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.equalButton}
                  onPress={() => swiperRef.current.scrollBy(1)}>
                  <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Third Page */}
            {i === 2 && (
              <View style={styles.centeredView}>
                <TouchableOpacity
                  style={[styles.nextButton, styles.fullWidthButton]}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.nextText}>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => navigation.navigate('')}>
                  <Text style={styles.alreadyText}>
                    Already have an account?{' '}
                    <Text style={styles.loginText}>Login!</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.blackBg,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(5),
  },
  image: {
    width: wp(90),
    height: hp(50),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fs(3.2),
    fontWeight: 'bold',
    color: color.white,
    marginTop: hp(2),
    textAlign: 'center',width:wp(60)
  },
  description: {
    fontSize: fs(2),
    textAlign: 'center',
    color: color.label,
    marginVertical: hp(1),
    paddingHorizontal: wp(5),
  },
  skipButton: {
    position: 'absolute',
    top: hp(5),
    right: wp(5),
    zIndex: 10,
  },
  skipText: {
    fontSize: fs(2),
    color: color.white,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: hp(2),
  },
  equalButton: {
    flex: 1,
    backgroundColor: color.darkRed,
    paddingVertical: hp(1.5),
    marginHorizontal: wp(2),
    borderRadius: 30,
    alignItems: 'center',
    elevation: 10,
  },
  nextButton: {
    backgroundColor: color.darkRed,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(10),
    borderRadius: 30,
    marginTop: hp(2),
    alignItems: 'center',
    elevation: 10,
  },
  fullWidthButton: {
    width: wp(80),
  },
  nextText: {
    color: color.white,
    fontSize: fs(2.5),
    fontWeight: 'bold',
  },
  centeredView: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  loginButton: {
    marginTop: hp(2),
  },
  alreadyText: {
    fontSize: fs(2),
    color: color.white,
  },
  loginText: {
    color: color.darkRed,
    fontWeight: 'bold',
  },
});

export default IntroSlider;
