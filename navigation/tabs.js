import {COLORS, icons} from '../constants';

import Home from '../screens/Home';
import React from 'react';
import TabBarCustomButton from '../components/Tab/TabBarCustomButton';
import TabIconDefault from '../components/Tab/TabIconDefault';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: 100,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIconDefault focused={focused} icon={icons.home} label="HOME" />
          ),
        }}
      />
      <Tab.Screen
        name="Porfolio"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIconDefault
              focused={focused}
              icon={icons.pie_chart}
              label="PORTFOLIO"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIconDefault
              focused={focused}
              icon={icons.transaction}
              containerStyle={{tintColor: COLORS.white}}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIconDefault
              focused={focused}
              icon={icons.line_graph}
              label="PRICES"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIconDefault
              focused={focused}
              icon={icons.settings}
              label="SETTINGS"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
