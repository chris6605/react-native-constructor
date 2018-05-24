/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyNavigator from './MyNavigator';

import Const from './Const';


export default class App extends Component {
  render() {
    return (
      <View style={{ width: Const.mScreenWidth, height: Const.mScrennHeight }}>
      
        <MyNavigator />
      </View>
    );
  }
}
