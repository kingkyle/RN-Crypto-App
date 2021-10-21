import {COLORS, FONTS, SIZES, icons} from '../constants';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeaderBar = ({right}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.radius,
        paddingBottom: SIZES.radius,
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back_arrow}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              tintColor: COLORS.gray,
            }}
          />
          <Text style={{...FONTS.h3, marginLeft: SIZES.base}}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View
          style={{flex: 1, alignItems: 'flex-end', marginRight: SIZES.base}}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
