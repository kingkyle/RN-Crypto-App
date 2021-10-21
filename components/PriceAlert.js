import {COLORS, FONTS, SIZES, icons} from '../constants';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const PriceAlert = ({customContainerStyle}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 3.7,
        marginHorizontal: SIZES.radius,
        padding: SIZES.padding - 5,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...styles.shadow,
        ...customContainerStyle,
      }}>
      <Image
        source={icons.notification_color}
        style={{width: 25, height: 25}}
      />
      <View style={{flex: 1, marginLeft: SIZES.radius}}>
        <Text style={{...FONTS.h4}}>Set Price Alert</Text>
        <Text style={{...FONTS.body5}}>
          Get Notified when your coins are moving
        </Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{width: 15, height: 15, tintColor: COLORS.gray}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default PriceAlert;
