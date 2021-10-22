import {COLORS, FONTS, SIZES} from '../constants';
import {Image, Text, View} from 'react-native';

import React from 'react';

const CurrencyLabel = ({currency, code, icon, customCodeStyle}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Image
          source={icon}
          resizeMode="cover"
          style={{width: 25, height: 25, marginTop: 5}}
        />
      </View>
      <View style={{marginLeft: SIZES.base}}>
        <Text style={{...FONTS.h3}}>{currency}</Text>
        <Text style={{...FONTS.body4, color: COLORS.gray, ...customCodeStyle}}>
          {code}
        </Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;
