import React from 'react';
import {
    Image, Text
} from 'react-native';

import {createAppContainer, createBottomTabNavigator} from "react-navigation";

import HomePage from './HomePage';
import MinePage from './MinePage';

const TabNavigator = createBottomTabNavigator(
    {
        HomePage: HomePage,
        MinePage: MinePage,
    },
    {
        initialRouteName: 'HomePage',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon;
                if (routeName === 'HomePage') {
                    icon = focused ? require('../res/tab/ic_tabbar_home_selected.png') : require('../res/tab/ic_tabbar_home.png');
                } else if (routeName === 'MinePage') {
                    icon = focused ? require('../res/tab/ic_tabbar_mine_selected.png') : require('../res/tab/ic_tabbar_mine.png');
                }
                return <Image
                    style={{width: 25, height: 25}}
                    source={icon}
                    tintColor={tintColor}/>;
            },
            tabBarLabel: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let title;
                if (routeName === 'HomePage') {
                    title = '产品';
                } else if (routeName === 'MinePage') {
                    title = '我的';
                }
                return <Text
                    style={{fontSize: 11, color: tintColor, marginBottom: 1.5, textAlign: 'center'}}>{title}</Text>;
            },
            tabBarOptions: {
                activeTintColor: '#121317',
                inactiveTintColor: 'gray',
            },
            lazy: true,// 是否懒加载
        }),
    }
);

export default createAppContainer(TabNavigator);