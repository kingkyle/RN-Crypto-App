import {SafeAreaView, Text} from 'react-native';

import {COLORS} from '../constants';
import {HeaderBar} from '../components';
import React from 'react';

const CryptoDetail = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray1}}>
      <HeaderBar right={true} />
      <Text>Crypto Detail</Text>
    </SafeAreaView>
  );
};

export default CryptoDetail;
