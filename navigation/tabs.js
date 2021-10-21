import Home from '../screens/Home';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Porfolio" component={Home} />
      <Tab.Screen name="Transaction" component={Home} />
      <Tab.Screen name="Prices" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

export default tabs;