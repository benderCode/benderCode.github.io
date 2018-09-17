import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
export default class TextInput extends Component {
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
            // KeyboardAvoidingView 处理键盘遮挡问题
            // KeyboardAvoidingView 标签包裹输入框
            // behavior: IOS 设置padding android null
            <KeyboardAvoidingView
                behavior={this.state.IOS ? "padding" : null}
                style={{ flex: 1 }}
            >
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

                    <TextInput
                        style={styles.textInput}// 样式
                        placeholder={'无内容时的提示文字'}// 提示文字
                        placeholderTextColor={"#ccc"}// 提示文字颜色
                        onChangeText={(text) => this.setState({ text: text })}// 输入事件
                        defaultValue={this.state.text}// 默认值
                        underlineColorAndroid={'transparent'}
                        keyboardType={'numeric'}// 键盘类型 default默认 numeric数字
                        onFocus={this.doctorPhoneFocus.bind(this)}// 获取焦点事件
                        onBlur={this.doctorPhoneBlur.bind(this)}// 失去焦点事件
                        maxLength={11}// 最大长度
                        caretHidden={false}// true隐藏光标。默认值为false。
                        editable={true}//false文本框是不可编辑的。默认值为true。
                        multiline={false}//默认值为false,多行输入时加 {textAlignVertical: 'top'}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
    // 账号焦点事件
    doctorPhoneFocus() { }
    // 账号失去焦点
    doctorPhoneBlur() { }

    // 登录事件
    fetch() {
        let formData = new FormData();
        formData.append("key", "value");
        fetch("requestUrl", {
            method: 'POST',
            headers: {
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('responseData', responseData);
                if (responseData.code == 20000) {

                } else {

                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
}

// 样式
const styles = StyleSheet.create({

});