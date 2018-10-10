import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Keyboard, KeyboardAvoidingView } from 'react-native';
export default class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,// 加载动画
            text: '',
            IOS: true,
            keyFlag: false,
            keyHeight: 0,
        }
    }
    getInitalState() {
        // 1初始化state
    }
    componentWillMount() {
        // 2 render前
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentDidMount() {
        // 4获取数据 在 render 后
    }
    componentWillUnmount() {
        // 5卸载组件
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    // 键盘弹出
    _keyboardDidShow(e) {
        this.setState({
            keyFlag: true,
            keyHeight: Math.ceil(e.endCoordinates.height),
        })
        setTimeout(() => {
            _scrollView.scrollToEnd({
                animated: true
            });
        })
    }
    // 键盘收起
    _keyboardDidHide(e) {
        this.setState({
            keyFlag: false,
            keyHeight: 0,
        })
    }
    render() {
        // 3
        return (
            // KeyboardAvoidingView 处理键盘遮挡问题
            // KeyboardAvoidingView 标签包裹输入框
            // behavior: IOS 设置padding android null
            <KeyboardAvoidingView
                behavior={this.state.IOS ? "padding" : null}
                style={{ flex: 1 }}
            >
                <ScrollView
                    ref={(scrollView) => {
                        _scrollView = scrollView;
                    }}
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
            </KeyboardAvoidingView>
        );
    }
    // 账号焦点事件
    doctorPhoneFocus() { }
    // 账号失去焦点
    doctorPhoneBlur() { }
}

// 样式
const styles = StyleSheet.create({

});
