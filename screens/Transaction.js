import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import {
  CurrencyLabel,
  HeaderBar,
  styles,
  TextButton,
  TransactionHistory,
} from '../components';

const Transaction = ({route}) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState(null);
  React.useEffect(() => {
    const {currency} = route.params;
    setSelectedCurrency(currency);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray1}}>
      <HeaderBar right={false} />
      <ScrollView>
        <View style={{flex: 1, paddingBottom: SIZES.padding}}>
          <View
            style={{
              marginHorizontal: SIZES.radius,
              paddingHorizontal: SIZES.padding - 6,
              paddingVertical: SIZES.padding - 6,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.base,
              marginTop: SIZES.radius,
              ...styles.shadow,
            }}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: SIZES.radius,
              }}>
              <Text style={{...FONTS.h2, textAlign: 'center'}}>
                {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  textAlign: 'center',
                }}>
                ${selectedCurrency?.wallet.value}{' '}
              </Text>
            </View>
            <TextButton
              label="Trade"
              customContainerStyle={{marginTop: SIZES.radius}}
            />
          </View>
          <TransactionHistory history={selectedCurrency?.transactionHistory} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;
