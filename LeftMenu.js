import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Const from '../Const'

export default class leftMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }


    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps })
    }

    render() {
        const { navigate, closeDrawer } = this.props.screenProps.descriptors.Home.navigation
        return (
            <View style={{ width: Const.getSize(260), height: Const.mScrennHeight, backgroundColor: Const.mainColor }}>

                <View style={{ width: Const.getSize(260), height: 20, backgroundColor: Const.mainColor }} />
                <View style={{ width: Const.getSize(260), height: Const.getSize(150), backgroundColor: Const.mainColor }} />
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <TouchableOpacity style={{ width: Const.getSize(260), height: 44, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e8eef0', justifyContent: 'center' }}
                        onPress={() => {
                            navigate('CollectPage', { from: 'leftMenu' })
                            closeDrawer();
                        }}>
                        <Text style={{ fontSize: 14, color: '#666666', paddingLeft: 16, textAlign: 'left' }}>我的收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: Const.getSize(260), height: 44, backgroundColor: '#fff', opacity: 0.8, borderBottomWidth: 1, borderBottomColor: '#e8eef0', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#666666', paddingLeft: 16, textAlign: 'left' }}>賬號設置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: Const.getSize(260), height: 44, backgroundColor: '#fff', opacity: 0.8, borderBottomWidth: 1, borderBottomColor: '#e8eef0', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#666666', paddingLeft: 16, textAlign: 'left' }}>安全設置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: Const.getSize(260), height: 44, backgroundColor: '#fff', opacity: 0.6, borderBottomWidth: 1, borderBottomColor: '#e8eef0', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#666666', paddingLeft: 16, textAlign: 'left' }}>關於</Text>
                    </TouchableOpacity>


                </ScrollView>

            </View>
        );
    }



}