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

export default class CollectPage extends Component {


    onBack() {

        if (this.props.navigation.state.params.from == 'leftMenu') {
            this.props.navigation.openDrawer();
        }
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ width: Const.mScreenWidth, height: Const.mScrennHeight, backgroundColor: '#fff', alignItems: 'center' }}>
                <View style={{ width: Const.mScreenWidth, height: 20, backgroundColor: '#1097d5' }} />
                <NavigationBar
                    canBack={true}
                    title='收藏'
                    onBack={this.onBack.bind(this)}
                />

                <Text style={{ fontSize: 14, color: '#333333', marginTop: 200 }}>收藏</Text>
            </View>
        );
    }



}