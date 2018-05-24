import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import Const from '../Const';

import CollectPage from '../pages/CollectPage';

import AboutPage from '../pages/AboutPage';

import NavigationBar from './NavigationBar';



export default class MainComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ width: Const.mScreenWidth, height: Const.mScrennHeight - 64, alignItems: 'center', backgroundColor: '#fff' }}>
                <View style={{ width: Const.mScreenWidth, height: 20, backgroundColor: "#1097d5" }}>
                    <StatusBar />
                </View>
                <NavigationBar
                    haveDrawer={true}
                    title='首頁'
                    onDrawerPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                />
                <Text style={{ fontSize: 14, color: '#333333', marginTop: 200 }}>首页界面</Text>
                <TouchableOpacity style={{ marginTop: 30 }}
                    onPress={() => {
                        this.props.navigation.push('DetailPage', { title: '詳情頁', des: '哈哈' })
                    }}>
                    <Text style={{ fontSize: 14, color: '#1097d5' }}>跳轉到詳情頁面</Text>
                </TouchableOpacity>
            </View>
        );
    }



}