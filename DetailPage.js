import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import NavigationBar from '../component/NavigationBar';

import Const from '../Const';

export default class DetailPage extends Component {

    onBack() {
        this.props.navigation.goBack();
    }

    render() {
        const { state } = this.props.navigation;
        const { title } = state && state.params || {};

        return (
            <View style={{ width: Const.mScreenWidth, height: Const.mScrennHeight, backgroundColor: '#fff', alignItems: 'center' }}>
                <View style={{ width: Const.mScreenWidth, height: 20, backgroundColor: '#1097d5' }} />
                <NavigationBar
                    canBack={true}
                    title={title}
                    onBack={this.onBack.bind(this)}
                />

                <Text style={{ fontSize: 14, color: '#333333', marginTop: 200 }}>{title}</Text>
            </View>
        );
    }



}