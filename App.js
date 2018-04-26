/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

//引入YellowBox
import {
    YellowBox
} from 'react-native';
//react-navigation插件
import {
    StackNavigator,
} from 'react-navigation';

import LoginScreen from './app/ui/public/login.js';

//屏蔽对应的警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
    'Module RCTImageLoader requires main queue setup since it overrides `init` ']);

//初始化StackNavigator
export default Navi = StackNavigator({
    Login: {
        screen : LoginScreen,
        navigationOptions : {
            header : null
        }
    }
});
