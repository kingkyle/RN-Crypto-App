import {COLORS, FONTS, SIZES, dummyData} from '../../constants';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Trending = () => {
  const navigation = useNavigation();
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '-25%',
      }}>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.white,
          paddingLeft: SIZES.radius,
        }}>
        Trending
      </Text>
      <FlatList
        contentContainerStyle={{marginTop: SIZES.base}}
        data={trending}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              width: 160,
              padding: SIZES.padding,
              marginLeft: index === 0 ? SIZES.radius : 0,
              marginRight: SIZES.radius,
              borderRadius: 10,
              backgroundColor: COLORS.white,
            }}
            onPress={() =>
              navigation.navigate('CryptoDetail', {currency: item})
            }>
            {/* Currency  */}
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{width: 25, height: 25, marginTop: 5}}
                />
              </View>
              <View style={{marginLeft: SIZES.base}}>
                <Text style={{...FONTS.h3}}>{item.currency}</Text>
                <Text style={{...FONTS.body4, color: COLORS.gray}}>
                  {item.code}
                </Text>
              </View>
            </View>

            {/* Value  */}
            <View style={{marginTop: SIZES.radius}}>
              <Text style={{...FONTS.h3}}>${item.amount}</Text>
              <Text
                style={{
                  ...FONTS.h4,
                  color: item.type === 'I' ? COLORS.green : COLORS.red,
                }}>
                {item.changes}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Trending;
