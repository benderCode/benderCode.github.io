import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import { CachedImage, ImageCache } from "react-native-img-cache";
// CachedImage 和 Image 标签相似 支持 require uri
// let cacheJSON = ImageCache.get() 查所有缓存
// ImageCache.get().clear() 清除缓存
export default class ImgCache extends Component {
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
                <CachedImage style={{}} source={this.state.userInfo && this.state.userInfo.headImg ? { uri: this.state.userInfo.headImg } : require('../images/default_doc_img.png')} />
            </ScrollView>
        );
    }

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