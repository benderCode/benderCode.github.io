import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// ImagePicker
const photoOptions = {
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: .75,// 质量压缩
    allowsEditing: false,// ios图片裁剪
    mediaType: 'photo',//photo照片 或 video视频
    noData: false,
    maxWidth: 720,// 宽高压缩
    maxHeight: 1280,// 宽高压缩
    storageOptions: {
        skipBackup: true,
        path: 'images'
    },
};
export default class ImagePicker extends Component {
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


            </ScrollView>
        );
    }
    openMycamera = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
            if (response.didCancel) {
                return null;
            } else if (response.error) {
                console.log('ImagePicker Error:', response.error)
            } else if (response.customButton) {
                console.log('Usr tapped custom button:', response.customButton)
            } else {
                // response 拿到的资源
                // base64
                // uri
                // fileName 文件名 IOS拍照时无此项
                // size
            }
        })
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

