import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Const from '../Const';



export default class TabBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedIndex: nextProps.selectedIndex })
    }


    render() {
        return (
            <View style={{ width: Const.mScreenWidth, height: 64, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', opacity: 0.8 }}>
                <TouchableOpacity style={{ width: Const.mScreenWidth / 3, height: 64, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                      this.props.onTabSelected && this.props.onTabSelected(0)
                    }}>
                    <Image style={{ width: 28, height: 28 }} source={require('../images/tab_main.png')} />
                    <Text style={{ fontSize: Const.getSize(12), paddingTop: 5, color: this.state.selectedIndex == 0 ? '#1097d5' : '#666666' }}>首頁</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: Const.mScreenWidth / 3, height: 64, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        this.props.onTabSelected && this.props.onTabSelected(1)
                    }}>
                    <Image style={{ width: 28, height: 28 }} source={require('../images/tab_setting.png')} />
                    <Text style={{ fontSize: Const.getSize(12), paddingTop: 5, color: this.state.selectedIndex == 1 ? '#1097d5' : '#666666' }}>設置</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: Const.mScreenWidth / 3, height: 64, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                       this.props.onTabSelected && this.props.onTabSelected(2)
                    }}>
                    <Image style={{ width: 28, height: 28 }} source={require('../images/tab_mine.png')} />
                    <Text style={{ fontSize: Const.getSize(12), paddingTop: 5, color: this.state.selectedIndex == 2 ? '#1097d5' : '#666666' }}>我的</Text>
                </TouchableOpacity>

            </View>
        );
    }



}
