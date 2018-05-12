/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

//引入YellowBox
import {
    YellowBox,
    Image
} from 'react-native';
//react-navigation插件
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';

import LoginScreen from './app/ui/public/login.js';
import EarsScreen from './app/ui/public/ears.js';
import ClockScreen from './app/ui/public/clock.js';
import UserScreen from './app/ui/public/user.js';
import ClassesScreen from './app/ui/public/classes.js';


//屏蔽对应的警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
    'Module RCTImageLoader requires main queue setup since it overrides `init` ']);

//初始化每一个页面
 const Tabs = TabNavigator({
     Ears: {
        screen: EarsScreen,
        navigationOptions: {
            tabBarLabel: '磨耳朵',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./app/image/btn/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
            headerTitle: '磨耳资源',
            headerTitleStyle: {//导航栏文字的样式
                flex: 1,
                fontSize:16,
                textAlign: 'center',
            },
            headerLeft: null,
        }
    },
    Clock: {
        screen: ClockScreen,
        navigationOptions: {
            tabBarLabel: '爱打卡',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./app/image/btn/a_05.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
            headerTitle: '每日打卡',
            headerTitleStyle: {//导航栏文字的样式
                flex: 1,
                fontSize:16,
                textAlign: 'center',
            },
            headerLeft: null,
        }
    },
    Classes: {
        screen: ClassesScreen,
        navigationOptions: {
            tabBarLabel: '班级',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./app/image/btn/a_05.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
            headerTitle: '小伙伴',
            headerTitleStyle: {//导航栏文字的样式
                flex: 1,
                fontSize:16,
                textAlign: 'center',
            },
            headerLeft: null,
        }
    },
    User: {
        screen: UserScreen,
        navigationOptions: {
            tabBarLabel: '我',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./app/image/btn/a_05.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
            headerTitle: '我的信息',
            headerTitleStyle: {//导航栏文字的样式
                flex: 1,
                fontSize:16,
                textAlign: 'center',
            },
            headerLeft: null,
        }
    },
}, {
    tabBarPosition: 'bottom',//设置TabNavigator的位置
    animationEnabled: true,//是否在更改标签时显示动画
    swipeEnabled: true,//是否允许在标签之间进行滑动
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});

//初始化StackNavigator
export default Navi = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    TabNav:{
        screen: Tabs,
    }
}, {
    initialRouteName: 'Login',
});
