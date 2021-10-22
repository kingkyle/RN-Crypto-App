import {COLORS, dummyData, FONTS, SIZES} from '../constants';
import {Header, PriceAlert, TransactionHistory, styles} from '../components';
import {LogBox, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Home = () => {
  const [transactionHistory, setTransactionHistory] = React.useState(
    dummyData.transactionHistory,
  );
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 110}}>
        <Header />
        <PriceAlert />
        {/* Start of Notice  */}
        <View
          style={{
            backgroundColor: COLORS.secondary,
            marginTop: SIZES.padding - 5,
            marginHorizontal: SIZES.radius,
            padding: 18,
            borderRadius: SIZES.radius,
            ...styles.shadow,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>
            Investing Safety
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4,
              lineHeight: 18,
              marginTop: SIZES.base,
            }}>
            Its very difficult to time an investment, especially when the market
            is volatile. Learn how to use that dollar cost average to your
            advantage
          </Text>
          <TouchableOpacity
            style={{marginTop: SIZES.base}}
            onPress={() => console.log('Learn More')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: COLORS.green,
                ...FONTS.h3,
              }}>
              Learn More
            </Text>
          </TouchableOpacity>
        </View>
        {/* End of Notice  */}
        <TransactionHistory history={transactionHistory} />
      </View>
    </ScrollView>
  );
};

export default Home;
