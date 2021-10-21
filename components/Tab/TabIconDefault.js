import {COLORS, FONTS} from '../../constants';
import {Image, Text, View} from 'react-native';

import React from 'react';

const TabIconDefault = ({focused, icon, label, containerStyle}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? COLORS.primary : COLORS.black,
          ...containerStyle,
        }}
      />
      {label && (
        <Text
          style={{
            color: focused ? COLORS.primary : COLORS.black,
            ...FONTS.body5,
            fontSize: 10,
          }}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default TabIconDefault;
