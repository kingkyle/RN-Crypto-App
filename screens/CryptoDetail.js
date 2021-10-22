import {Animated, SafeAreaView, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES, dummyData} from '../constants';
import {CurrencyLabel, HeaderBar, styles} from '../components';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';

import React from 'react';
import {VictoryCustomTheme} from '../styles';

const CryptoDetail = ({route}) => {
  const scrollX = new Animated.Value(0);
  const numOfCharts = [1, 2, 3];
  const [selectedCurrency, setSelectedCurrency] = React.useState(null);
  const [selectOption, setSelectedOption] = React.useState(
    dummyData.chartOptions[0],
  );
  React.useEffect(() => {
    const {currency} = route.params;
    setSelectedCurrency(currency);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray1}}>
      <HeaderBar right={true} />
      <View
        style={{
          marginHorizontal: SIZES.radius,
          paddingHorizontal: SIZES.padding - 6,
          paddingVertical: SIZES.radius,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.base,
          marginTop: SIZES.radius,
          ...styles.shadow,
        }}>
        {/* Header  */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
          </View>
          <View>
            <Text style={{...FONTS.h3}}>${selectedCurrency?.amount}</Text>
            <Text
              style={{
                ...FONTS.body4,
                color:
                  selectedCurrency?.type === 'I' ? COLORS.green : COLORS.red,
              }}>
              {selectedCurrency?.changes}
            </Text>
          </View>
        </View>
        {/* Chart  */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={0}
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}>
          {numOfCharts.map((item, index) => (
            <View key={`chart-${index}`}>
              <View style={{marginTop: -25, marginHorizontal: -10}}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 15}>
                  <VictoryLine
                    style={{
                      data: {stroke: COLORS.secondary},
                      parent: {border: '1px solid #ccc'},
                    }}
                    data={selectedCurrency?.chartData}
                    categories={{
                      x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                      y: ['15', '30', '45'],
                    }}
                  />
                  <VictoryScatter
                    data={selectedCurrency?.chartData}
                    size={5}
                    style={{
                      data: {
                        fill: COLORS.secondary,
                      },
                    }}
                  />
                  <VictoryAxis
                    style={{
                      grid: {
                        stroke: 'transparent',
                      },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: {stroke: 'transparent'},
                      grid: {stroke: 'grey'},
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        {/* Dates  */}
        {/* Dots  */}
      </View>
    </SafeAreaView>
  );
};

export default CryptoDetail;
