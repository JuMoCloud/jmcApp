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
    View,
    Image
} from 'react-native';

import EditView from '../../lib/EditView.js';
import LoginButton from '../../lib/LoginButton.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
    }
    componentWillMount(){
        //alert(-1);
    }
    render() {
        return (
            <View style={LoginStyles.loginCss}>
                <View   style={{flexDirection: 'row',height:100,marginTop:40,
                    justifyContent: 'center', alignItems: 'flex-start',}}>
                    <Image style={{height:170,width:170}} source={require('../../image/logo.png')}/>
                </View>
                <View style={{marginTop:80}}>
                    <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }}/>
                    <EditView name='输入密码'  secureTextEntry={true}
                              onChangeText={(text) => {
                                  this.password = text;
                              }}/>
                    <LoginButton name='登录' onPressCallback={this.onPressLogin}/>
                    <Text onPress={this.onPressSecret} style={{color:"#4A90E2",textAlign:'right',marginTop:20}} >忘记密码？</Text>
                </View>
            </View>
        );
    }

    onPressLogin = () => {
        //alert(0);
        this.props.navigation.navigate('Ears');
    };

    onPressSecret = () =>{
        alert(1);
    };

}

const LoginStyles = StyleSheet.create({
    loginCss: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
});
