import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Const from '../Const'

import NavigationBar from '../component/NavigationBar'

import MainComponent from '../component/MainComponent'

import SettingComponent from '../component/SettingComponent'

import MineComponent from '../component/MineComponent'

import TabBar from '../component/TabBar'

import { TabNavigator } from 'react-navigation';


export default class MainPage extends Component {

    main = {
        screen: ({ screenProps, navigation }) => {
            return <MainComponent
                navigation={navigation}
            />
        }
    }
    set = {
        screen: ({ screenProps, navigation }) => {
            return <SettingComponent
                navigation={navigation}
            />
        }
    }

    mine = {
        screen: ({ screenProps, navigation }) => {
            return <MineComponent
                navigation={navigation}
            />
        }
    }

    TabNav = TabNavigator({
        main: this.main,
        set: this.set,
        mine: this.main
    }, {
            initialRouteName: 'main',
            animationEnabled: true,
            tabBarPosition: 'bottom',
            swipeEnabled: true,
            backBehavior: 'none',
            lazy: true,
            tabBarComponent: (event) => {
                // this.selectedTabIndex = event.navigationState.index;
                return <TabBar
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

    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {
        return (
            <View style={{ width: Const.mScreenWidth, height: Const.mScrennHeight, alignItems: 'center', backgroundColor: '#fff' }}>
                <View style={{ width: Const.mScreenWidth, height: 20, backgroundColor: Const.mainColor }} />
                <NavigationBar
                    title='首頁'
                />
                <this.TabNav />
            </View>
        );
    }



}