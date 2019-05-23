import React from 'react';

import {createAppContainer, createStackNavigator} from 'react-navigation';

import TabBar from './TabBar';
import HomePage from './HomePage';
import ScanPage from "./ScanPage";
import MinePage from "./MinePage";
import SharePage from "./SharePage";

const StackNavigator = createStackNavigator(
    {
        TabBar: TabBar,
        HomePage: HomePage,
        MinePage: MinePage,
        ScanPage: ScanPage,
        SharePage: SharePage,
    },
    {
        initialRouteName: 'TabBar',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default App = createAppContainer(StackNavigator);