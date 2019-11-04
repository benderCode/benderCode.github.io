import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,// 加载动画
            text: '',
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
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} style={{ flex: 1, marginBottom: 34, }}>
                    <ScrollView
                        ref='_scroll'
                    >
                        {/*                     
            多行输入文本框
            multiline={true} 是否多行
            多行状态下 
                行高设置无效 通过onContentSizeChange获取行高
            获取焦点时键盘不能固定在光标下方
                解决方案：
                    获取输入框容器距离页面顶部的距离 
                    onLayout={(e) => {
                        // e.nativeEvent = { layout: { height: 75, width: 375, x: 0, y: 1000, }, target: 2965 }
                    }}
                    获取焦点是滚动到顶部
                    scrollObj.scrollTo({ x: 0, y: 'y轴滚动距离', animated: true})
                    优化：y轴距离 - 键盘高度(键盘在弹出后才能获取到键盘高度需要获取到高度后在触发滚动)
                        获取键盘高度
                            componentDidMount() {
                                this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
                                this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
                            }
                            componentWillUnmount() {
                                this.keyboardDidShowListener.remove();
                                this.keyboardDidHideListener.remove();
                            }
                            _keyboardDidShow(e) {
                                // e = {
                                //     duration: 250,
                                //     easing: "keyboard",
                                //     endCoordinates: { height: 335, screenX: 0, screenY: 477, width: 375, },
                                //     startCoordinates: { height: 277, screenX: 0, screenY: 812, width: 375, },
                                // }
                            }
                            _keyboardDidHide() { }
                        
                    
            */}
                        <View
                            style={[{ marginTop: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', }]}
                            onLayout={(e) => {
                                // e.nativeEvent = { layout: { height: 75, width: 375, x: 0, y: 1000, }, target: 2965 }
                                this.setState({
                                    scrollY: e.nativeEvent.layout.y,
                                })
                            }}
                        >
                            <View style={{
                                flex: 1,
                                maxHeight: 86,// 设置输入框容器高度上限(行高*行数+上下padding)
                                minHeight: 42,// 设置输入框容器高度下限(行高*行数+上下padding)
                                paddingTop: 10, paddingBottom: 10,
                                paddingLeft: 5, paddingRight: 5,
                                height: this.state.inputHeight + 20,// 动态设置输入框容器高度(输入框高度 + 上下padding)
                                marginLeft: 15, marginRight: 15,
                                marginBottom: 10, marginTop: 10,
                                backgroundColor: '#ddd',
                                borderRadius: 5,
                            }}>
                                <TextInput
                                    style={{
                                        padding: 0, fontSize: 18, flex: 1,
                                        textAlignVertical: 'top', // 多行输入事处理安卓文本居中问题
                                    }}
                                    ref={(ref) => this.multiline = ref}
                                    onChangeText={(text) => {
                                        // text 输入内容
                                        console.log(text)
                                    }}// 输入事件 
                                    onContentSizeChange={this.onContentSizeChange.bind(this)}// 获取输入框宽高 仅在 multiline={true} 有效
                                    onFocus={() => {
                                        this.refs._scroll.scrollTo({
                                            x: 0,
                                            y: this.state.scrollY,
                                            animated: true
                                        })
                                    }}
                                    multiline={true}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'default'}// 键盘类型 default默认 numeric数字
                                    caretHidden={false}// true隐藏光标。默认值为false。
                                    returnKeyType={"done"}// 键盘确定按钮类型 done/go/next/search/send
                                // style={styles.textInput}// 样式
                                // placeholder={'无内容时的提示文字'}// 提示文字
                                // placeholderTextColor={"#ccc"}// 提示文字颜色
                                // onChangeText={(text) => this.setState({ text: text })}// 输入事件
                                // defaultValue={this.state.text}// 默认值
                                // underlineColorAndroid={'transparent'}
                                // keyboardType={'numeric'}// 键盘类型 default默认 numeric数字
                                // onFocus={this.doctorPhoneFocus.bind(this)}// 获取焦点事件
                                // onBlur={this.doctorPhoneBlur.bind(this)}// 失去焦点事件
                                // maxLength={11}// 最大长度
                                // caretHidden={false}// true隐藏光标。默认值为false。
                                // editable={true}//false文本框是不可编辑的。默认值为true。
                                // multiline={false}//默认值为false,多行输入时加 {textAlignVertical: 'top'}
                                />
                            </View>
                        </View>


                        {/* 
                单行输入文本框 
                    获取焦点时键盘固定在光标下方
                 */}
                        <View style={[{ marginTop: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{
                                flex: 1,
                                height: 30,
                                paddingLeft: 5, paddingRight: 5,
                                marginLeft: 15, marginRight: 15,
                                marginBottom: 10, marginTop: 10,
                                backgroundColor: '#ddd',
                                borderRadius: 5,
                            }}>
                                <TextInput
                                    style={{
                                        padding: 0, fontSize: 18, flex: 1,
                                    }}
                                    onChangeText={(text) => {
                                        // text 输入内容
                                        console.log(text)
                                    }}// 输入事件 
                                    onFocus={(e) => { }}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'default'}// 键盘类型 default默认 numeric数字
                                    caretHidden={false}// true隐藏光标。默认值为false。
                                    returnKeyType={"done"}// 键盘确定按钮类型 done/go/next/search/send
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={[{ marginTop: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', }]}>
                        <View style={{
                            flex: 1,
                            maxHeight: 86,// 设置输入框容器高度上限(行高*行数+上下padding)
                            minHeight: 42,// 设置输入框容器高度下限(行高*行数+上下padding)
                            paddingTop: 10, paddingBottom: 10,
                            paddingLeft: 5, paddingRight: 5,
                            height: this.state.inputHeight + 20,// 动态设置输入框容器高度(输入框高度 + 上下padding)
                            marginLeft: 15, marginRight: 15,
                            marginBottom: 10, marginTop: 10,
                            backgroundColor: '#ddd',
                            borderRadius: 5,
                        }}>
                            <TextInput
                                style={{
                                    padding: 0, fontSize: 18, flex: 1,
                                    textAlignVertical: 'top', // 多行输入事处理安卓文本居中问题
                                }}
                                ref={(ref) => this.multiline = ref}
                                onChangeText={(text) => {
                                    // text 输入内容
                                    console.log(text)
                                }}// 输入事件 
                                onContentSizeChange={this.onContentSizeChange.bind(this)}// 获取输入框宽高 仅在 multiline={true} 有效
                                onFocus={() => { }}
                                multiline={true}
                                underlineColorAndroid={'transparent'}
                                keyboardType={'default'}// 键盘类型 default默认 numeric数字
                                caretHidden={false}// true隐藏光标。默认值为false。
                                returnKeyType={"done"}// 键盘确定按钮类型 done/go/next/search/send
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
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