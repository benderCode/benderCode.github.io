import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import CountDownButton from 'react-native-smscode-count-down';// 倒计时
export default class CountDownButton extends Component {
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
                <StatusBar
                    animated={true}//是否动画
                    hidden={false}//是否隐藏
                    backgroundColor={'#000'}//android 设置状态栏背景颜色
                    translucent={false}//android 设置状态栏是否为透明
                    showHideTransition="fade"//IOS状态栏改变时动画 fade:默认 slide
                    networkActivityIndicatorVisible={this.state.isLoading}//IOS设定网络活动指示器(就是那个菊花)是否显示在状态栏。
                    statusBarStyle={"default"}//ios:白底黑字  android:黑底白字
                />
                <CountDownButton
                    style={{}}
                    textStyle={{
                        fontSize: global.px2dp(15),
                        color: global.Colors.color,
                    }}// 文字样式
                    timerCount={120}// 倒计时时长
                    timerTitle={""}// 提示文字
                    enable={true}
                    onClick={(shouldStartCounting) => {
                        // shouldStartCounting(true); 开始倒计时
                    }}
                    timerEnd={() => {
                        this.setState({
                            TimingText: '重新获取'
                        })
                    }}// 倒计时结束
                />
            </ScrollView>
        );
    }
}

// 样式
const styles = StyleSheet.create({

});