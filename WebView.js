import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
export default class WebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,// 加载动画
            text: '',
            IOS: true,
        }
    }
    getInitalState() {
        // 1初始化state
    }
    componentWillMount() {
        // 2 render前
    }
    componentDidMount() {
        // 4获取数据 在 render 后
    }
    componentWillUnmount() {
        // 5卸载组件
    }
    render() {
        // 3
        return (
            <ScrollView
                style={styles.container}
                keyboardShouldPersistTaps={'handled'}
            >
                <WebView
                    ref="webView"
                    source={require("./index.html")}
                    style={{ marginTop: 20, width: 300, height: 500 }}
                    onLoadStart={() => {
                        // 加载开始1
                    }}
                    onLoad={() => {
                        // 2
                    }}
                    onLoadEnd={() => {
                        // 加载完成3
                        this.refs.webView.postMessage('"Hello" 我是RN发送过来的数据');
                    }}// RN 发消息
                    onMessage={(e) => {
                        console.log(e.nativeEvent.data)
                    }}// RN 收消息
                />
                {/* 
                    html
                    收消息
                    document.addEventListener('message', function (e) {
                        document.write(e.data)
                    });
                    发消息
                    window.postMessage('这是html发送到RN的消息');
                */}
            </ScrollView>
        );
    }
}

// 样式
const styles = StyleSheet.create({

});
