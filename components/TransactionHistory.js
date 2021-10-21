import {COLORS, FONTS, SIZES, dummyData, icons} from '../constants';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {styles} from '.';

const TransactionHistory = ({customContainerStyle}) => {
  const [transactionHistory, setTransactionHistory] = React.useState(
    dummyData.transactionHistory,
  );

  return (
    <View
      style={{
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.radius,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
        ...customContainerStyle,
      }}>
      <FlatList
        scrollEnabled={false}
        data={transactionHistory}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 0.5,
              backgroundColor: COLORS.lightGray,
            }}
          />
        )}
        ListHeaderComponent={
          <Text style={{...FONTS.h3, marginBottom: SIZES.base}}>
            Transaction History
          </Text>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: SIZES.base,
            }}
            onPress={() => console.log(item)}>
            <Image
              source={icons.transaction}
              style={{width: 25, height: 25, tintColor: COLORS.primary}}
            />
            <View style={{marginLeft: SIZES.radius, flex: 1}}>
              <Text style={{...FONTS.h4}}>{item.description}</Text>
              <Text style={{...FONTS.body4, color: COLORS.gray}}>
                {item.date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  marginRight: SIZES.radius,
                  color: item.type === 'B' ? COLORS.green : COLORS.black,
                  ...FONTS.h3,
                }}>
                {item.amount} {item.currency}
              </Text>
              <Image
                source={icons.right_arrow}
                style={{width: 15, height: 15, tintColor: COLORS.gray}}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionHistory;
