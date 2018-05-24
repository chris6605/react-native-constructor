/**
 * navigator  
 * create by BobZhou 2018/05/18
 */

import React, { Component } from 'react';

import { Image } from 'react-native';

import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import MainPage from './pages/MainPage';

import DetailPage from './pages/DetailPage';     // 详情页

import CollectPage from './pages/CollectPage';

import AboutPage from './pages/AboutPage';

import LeftMenu from './component/LeftMenu';

import Const from './Const';

import MainComponent from './component/MainComponent'

import SettingComponent from './component/SettingComponent'

import MineComponent from './component/MineComponent'

import TabBar from './component/TabBar'


const main = {
    screen: ({ screenProps, navigation }) => {
        return <MainComponent
            navigation={navigation}
        />
    }
}
const set = {
    screen: ({ screenProps, navigation }) => {
        return <SettingComponent
            navigation={navigation}
        />
    }
}

const mine = {
    screen: ({ screenProps, navigation }) => {
        return <MineComponent
            navigation={navigation}
        />
    }
}


const TabNav = TabNavigator({
    main: main,
    set: set,
    mine: mine
}, {
        initialRouteName: 'main',
        animationEnabled: true,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        backBehavior: 'none',
        lazy: false,
        tabBarComponent: (event) => {
            return <TabBar
                selectedIndex={event.navigationState.index}
                onTabSelected={(position) => {
                    if (position == 0) {
                        event.navigation.navigate('main');
                    } else if (position == 1) {
                        event.navigation.navigate('set');
                    } else if (position == 2) {
                        event.navigation.navigate('mine');
                    }
                }}
            />
        }
    });



const StackNav = StackNavigator({
    MainPage: {
        screen: TabNav,
    },
    DetailPage: {
        screen: DetailPage
    },
    CollectPage: {
        screen: CollectPage
    },
    AboutPage: {
        screen: AboutPage
    }
}, {
        headerMode: 'screen',
        initialRouteName: 'MainPage',
        mode: 'card',
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
            gestureResponseDistance: { horizontal: 200 }
        }
    });



const DrawerNav = DrawerNavigator({
    Home: {
        screen: StackNav
    }
}, {
        drawerWidth: Const.getSize(260),
        drawerPosition: 'left',
        drawerBackgroundColor: '#fff',
        contentComponent: (screenProps) => { return <LeftMenu screenProps={screenProps} /> },
        contentOptions: {
            initialRouteName: 'Home',
            activeTintColor: 'white',  // 选中文字颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景顏色
            activeBackgroundColor: '#1097d5', // 选中背景颜色
        },

    });

export default DrawerNav









