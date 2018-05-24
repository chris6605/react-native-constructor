import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import Const from '../Const'

import NavigationBar from './NavigationBar';


export default class SettingComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ width: Const.mScreenWidth, height: Const.mScrennHeight - 64, alignItems: 'center', backgroundColor: '#fff' }}>
                <View style={{ width: Const.mScreenWidth, height: 20, backgroundColor: "#1097d5" }}>
                    <StatusBar />
                </View>
                <NavigationBar
                    title='設置'
                />
                <Text style={{ fontSize: 14, color: '#333333', marginTop: 200 }}>設置界面</Text>
            </View>
        );
    }



}