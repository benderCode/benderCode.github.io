/** 
 * 侧滑按钮
 * 
 * react-native-swipeout
 * 
 * https://github.com/dancormier/react-native-swipeout
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class BoxShadow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,// 加载动画
            text: '',
        }
    }
    getInitalState() {
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        const swipeoutBtns = [{
            text: '删除',
            onPress: () => { },
            backgroundColor: Colors.red,
            color: Colors.white,
        }];// 按钮数组
        return (
            <ScrollView
                style={styles.container}
                keyboardShouldPersistTaps={'handled'}
            >
                <Swipeout
                    close={}// 关闭条件
                    right={swipeoutBtns}
                    autoClose={true}
                    onOpen={() => { }}// 打开事件
                    style={{ backgroundColor: Colors.white }}
                >
                </Swipeout>
            </ScrollView>
        );
    }
}

// 样式
const styles = StyleSheet.create({

});

