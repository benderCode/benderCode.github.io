/**
 * 自带 WebView 在安卓手机唤 input type == "file" 存在bug,使用 https://github.com/react-native-community/react-native-webview
 * WebModul WebView 封装
 * 
 * webContent      WebView 内容
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';
import { global } from '../utils/Global';
export default class TabNav extends Component {
    static defaultProps = {
        webContent: "",
    };
    constructor(props) {
        super(props);
        this.state = {
            webViewHeight: 0,// 商品详情webView高度
        }
    }

    render() {
        const sourceIos = {
            html: `<html>
                        <head>
                            <meta http-equiv='content-type' content='text/html;charset=utf-8'>
                            <style>*{margin:0;padding:0;}img,video{width: 100%;}</style>
                        </head>
                        <body>${this.props.webContent}</body>
                    </html>`,
        }
        const sourceAndroid = {
            html: `<html>
                        <head>
                            <meta http-equiv='content-type' content='text/html;charset=utf-8'>
                            <style>*{margin:0;padding:0;}img,video{width: 100%;}</style>
                        </head>
                        <body>${this.props.webContent}</body>
                    </html>`,
            baseUrl: '',
        }
        return (
            <View style={styles.container}>
                <WebView
                    source={IOS ? sourceIos : sourceAndroid}
                    style={[{
                        width: SCREEN_WIDTH,
                        height: this.state.webViewHeight || SCREEN_HEIGHT,
                    }]}
                    allowsInlineMediaPlayback={true}
                    scrollEnabled={false}
                    injectedJavaScript={IOS ? `(function () {
                                    var height = null;
                                    var width = null;
                                    function changeHeight() {
                                      if (document.body.scrollHeight != height) {
                                        height = document.body.scrollHeight;
                                        width = document.body.clientWidth;
                                        if (window.postMessage) {
                                          window.postMessage(JSON.stringify({
                                            type: 'setHeight',
                                            height: height,
                                            width: width,
                                          }))
                                        }
                                      }
                                    }
                                    setTimeout(changeHeight, 300);
                                    var aDom = document.getElementsByTagName("video");
                                    if (aDom.length > 0) {
                                        for (var i = 0; i < aDom.length; i++) {
                                            aDom[i].removeAttribute("controls");
                                            aDom[i].removeAttribute("width");
                                            aDom[i].removeAttribute("height");
                                            aDom[i].setAttribute("webkit-playsinline", "true");
                                            aDom[i].setAttribute("playsinline", "true");
                                            aDom[i].setAttribute("loop", "loop");
                                            aDom[i].play();
                                        }
                                    }
                                } ())`: `(function () {
                                    var height = null;
                                    var width = null;
                                    function changeHeight() {
                                      if (document.body.scrollHeight != height) {
                                        height = document.body.scrollHeight;
                                        width = document.body.clientWidth;
                                        if (window.postMessage) {
                                          window.postMessage(JSON.stringify({
                                            type: 'setHeight',
                                            height: height,
                                            width: width,
                                          }))
                                        }
                                      }
                                    }
                                    setTimeout(changeHeight, 300);
                                } ())`}
                    onMessage={(event) => {
                        try {
                            const action = JSON.parse(event.nativeEvent.data)
                            if (action.type === 'setHeight' && action.height > 0) {
                                this.setState({ webViewHeight: action.height / (action.width / SCREEN_WIDTH) })
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {

    },
});

