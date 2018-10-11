import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import * as wechat from 'react-native-wechat';
export default class WeChat extends Component {
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
        wechat.registerApp('AppID');
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
                <StatusBar
                    animated={true}//是否动画
                    hidden={false}//是否隐藏
                    backgroundColor={'#000'}//android 设置状态栏背景颜色
                    translucent={false}//android 设置状态栏是否为透明
                    showHideTransition="fade"//IOS状态栏改变时动画 fade:默认 slide
                    networkActivityIndicatorVisible={this.state.isLoading}//IOS设定网络活动指示器(就是那个菊花)是否显示在状态栏。
                    statusBarStyle={"default"}//ios:白底黑字  android:黑底白字
                />
            </ScrollView>
        );
    }
    // 添加账户
    addWeChat = () => {
        // isWXAppInstalled 判断是否安装有微信 返回 isInstalled(Boolean)
        wechat.isWXAppInstalled().then((isInstalled) => {
            if (isInstalled) {
                let scope = 'snsapi_userinfo';
                let state = 'wechat_sdk_demo';
                // sendAuthRequest 授权
                wechat.sendAuthRequest(scope, state)
                    .then(responseCode => {
                        if (responseCode.errCode == 0) {
                            this.setState({
                                isLoading: true,
                                ErrorPromptFlag: true,
                                ErrorPromptText: '授权中...',
                                ErrorPromptImg: require('../images/loading.png'),
                            });
                            // 获取 access_token
                            // 发送 appid secret code grant_type
                            // 返回 access_token
                            // https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxaeaf9ecd369f0592&secret=65131551996b322bd12bde7140b06ecd&code=code&grant_type=authorization_code"
                            fetch("https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxaeaf9ecd369f0592&secret=65131551996b322bd12bde7140b06ecd&code=" + responseCode.code + "&grant_type=authorization_code", {
                                method: 'GET',
                            }).then((response) => response.json()).then((responseData) => {
                                console.log('responseData', responseData);
                                // 获取微信个人信息
                                // 发送 access_token openid
                                // 获取 userinfo(微信用户信息)
                                fetch("https://api.weixin.qq.com/sns/userinfo?access_token=" + responseData.access_token + "&openid=" + responseData.openid, {
                                    method: 'GET',
                                }).then((response) => response.json()).then((responseData) => {
                                    console.log('responseData', responseData);
                                    this.appAdd(JSON.stringify(responseData))
                                }).catch((error) => {
                                    console.log('error', error);
                                });
                            }).catch((error) => {
                                console.log('error', error);
                            });
                        }
                    }).catch(err => {
                        this.setState({
                            isLoading: true,
                            ErrorPromptFlag: true,
                            ErrorPromptText: '授权失败',
                            ErrorPromptImg: require('../images/error.png'),
                        })
                        clearTimeout(this.timer)
                        this.timer = setTimeout(() => {
                            this.setState({
                                ErrorPromptFlag: false,
                            })
                        }, global.TimingCount)
                    })
            } else {
                // 未安装微信
                global.Alert.alert("", '没有安装微信，请您安装微信之后再试');
            }
        });
    }
}

// 样式
const styles = StyleSheet.create({

});
