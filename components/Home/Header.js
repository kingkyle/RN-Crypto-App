import {COLORS, FONTS, SIZES, dummyData, icons, images} from '../../constants';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {Trending} from '..';

const Header = () => {
  return (
    <View style={{width: '100%', height: 290, ...styles.shadow}}>
      <ImageBackground
        source={images.banner}
        resizeMode="cover"
        style={{flex: 1, alignItems: 'center'}}>
        {/* Header  */}
        <View
          style={{
            width: '100%',
            marginTop: SIZES.padding * 2,
            alignItems: 'flex-end',
            paddingHorizontal: SIZES.radius,
          }}>
          <TouchableOpacity
            style={{
              height: 35,
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => console.log('Notification Pressed')}>
            <Image
              source={icons.notification_white}
              resizeMode="contain"
              style={{flex: 1}}
            />
          </TouchableOpacity>
        </View>
        {/* Balance  */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: COLORS.white, ...FONTS.h4}}>
            Your Portfolio Balance
          </Text>
          <Text
            style={{color: COLORS.white, ...FONTS.h1, marginTop: SIZES.base}}>
            ${dummyData.portfolio.balance}
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.body5}}>
            {dummyData.portfolio.changes} Last 24 hours
          </Text>
        </View>
        {/* Trending  */}
        <Trending />
      </ImageBackground>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Header;
