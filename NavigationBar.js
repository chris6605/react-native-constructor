import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Const from '../Const'

export default class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps })
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', width: Const.mScreenWidth, height: 44, backgroundColor: Const.mainColor }}>
                {
                    this.props.canBack ? <TouchableOpacity style={{ width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            this.props.onBack && this.props.onBack();
                        }}>

                        <Image style={{ width: 28, height: 28 }} source={require('../images/back.png')} />
                    </TouchableOpacity> : null
                }
                {
                    this.props.haveDrawer ? <TouchableOpacity style={{ marginLeft: 10, width: 34, height: 34, borderRadius: 17, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            this.props.onDrawerPress && this.props.onDrawerPress();
                        }}>
                        <Image style={{ width: 34, height: 34 }} resizeMode='stretch' source={require('../images/tab_main.png')} />
                    </TouchableOpacity>
                        : null
                }
                {
                    this.props.title ? <Text style={{ flex: 1, marginRight: 44, marginLeft: this.props.canBack || this.props.haveDrawer ? 0 : 44, textAlign: 'center', fontSize: 18, color: '#fff' }}>{this.props.title}</Text> : null

                }

            </View>
        );
    }



}