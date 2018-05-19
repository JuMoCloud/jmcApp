import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';

export default class Ears extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Video
                    ref={(ref) => {
                        this.video = ref
                    }}
                    //来自本地的MP4视频
                    source={require('../../video/jmc.mp4')}
                    //1.0表示默认速率
                    rate={1.0}
                    //图片等比例缩放
                    resizeMode='contain'
                    //不重复播放
                    repeat={false}
                    //默认音量
                    volume={1.0}
                    //样式
                    style={styles.backgroundVideo}/>

                {/*<TouchableOpacity style={styles.button} activeOpacity={0.5}>*/}
                    {/*<Text style={{color: 'white'}}>磨耳朵</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    backgroundVideo:{
        width: 400,
        height: 400,
    }
});