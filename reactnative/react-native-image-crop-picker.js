/** 
 * 相机相册 获取图片资源
 * react-native-image-crop-picker
 * 
 * https://github.com/ivpusic/react-native-image-crop-picker
 * 
 * 
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, StatusBar, } from 'react-native';
import { global } from '../utils/Global';
import ImagePicker from 'react-native-image-crop-picker';
/*  
*   https://github.com/ivpusic/react-native-image-crop-picker
*   ImagePicker
*       openPicker         相册
*       openCamera         相机
*       openCropper        
*       cleanSingle      
*       clean      
*/

export default class GetImages extends Component {
    static defaultProps = {
        dataClick: function () { },
        cancelClick: function () { },
        maxNum: 1,
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Modal
                visible={true}
                animationType={"fade"}
                transparent={true}
                onRequestClose={this.props.cancelClick}
            >
                <TouchableOpacity
                    onPress={this.props.cancelClick}
                    activeOpacity={1}
                    style={styles.maskClick}
                >
                    <TouchableOpacity
                        onPress={() => { }}
                        activeOpacity={1}
                    >
                        <View style={styles.mainStyle}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={this.openCamera.bind(this)}
                                style={styles.btnClick}
                            >
                                <Text style={styles.btnText}>相机</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={this.multiple.bind(this)}
                                style={styles.btnClick}
                            >
                                <Text style={styles.btnText}>相册</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={this.props.cancelClick}
                                style={styles.btnClick}
                            >
                                <Text style={styles.btnText}>取消</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        );
    }
    openCamera = () => {
        ImagePicker.openCamera({
            mediaType: "photo",
            cropping: false,// 是否开启裁剪
            width: 300,// 裁剪宽度
            height: 300,// 裁剪高度
            includeBase64: true,// base64
            cropperToolbarTitle: '',// 裁剪图像时，确定工具栏的标题
            cropperCircleOverlay: false,// 默认 false 启用或禁用圆形裁剪蒙版 
            compressImageQuality: 0.8,// 压缩图像质量 0 ~ 1
            compressImageMaxWidth: 720,// 以最大宽度压缩图像
            compressImageMaxHeight: 720,// 以最大高度压缩图像
            cropperChooseText: '确定',//选择按钮文字 仅IOS
            cropperCancelText: '取消',//取消按钮文字 仅IOS
        }).then(response => {
            this.props.dataClick(response)
            /*  
            *   response:{} 资源
            *       data: ""            base64
            *       filename: ""        文件名
            *       height: 478         高度
            *       mime: "image/jpeg"  类型
            *       size: 90215         大小
            *       sourceURL: ""       本地路径
            *       width: 720          宽度
            */
        });
    }
    multiple = () => {
        ImagePicker.openPicker({
            mediaType: "photo",
            multiple: true,// 是否多选
            minFiles: 1,//最少数量
            maxFiles: this.props.maxNum,//最大数量
            includeBase64: true,// base64
            compressImageQuality: 0.8,// 压缩图像质量 0 ~ 1
            compressImageMaxWidth: 720,// 以最大宽度压缩图像
            compressImageMaxHeight: 720,// 以最大高度压缩图像
            cropperChooseText: '确定',//选择按钮文字 仅IOS
            cropperCancelText: '取消',//取消按钮文字 仅IOS
        }).then(response => {
            this.props.dataClick(response)
            /*  
            *   response:[{
            *       data: ""            base64
            *       filename: ""        文件名
            *       height: 478         高度
            *       mime: "image/jpeg"  类型
            *       size: 90215         大小
            *       sourceURL: ""       本地路径
            *       width: 720          宽度
            *   }] 
            */
        });
    }
}
const styles = StyleSheet.create({
    maskClick: {
        justifyContent: 'flex-end',
        backgroundColor: Colors.maskColor,
        flex: 1,
    },
    mainStyle: {
        paddingBottom: TabBar,
    },
    btnClick: {
        marginBottom: Px2dp(10),
        marginRight: Px2dp(10),
        marginLeft: Px2dp(10),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: "center",
        height: Px2dp(50),
        borderRadius: Px2dp(5),
    },
    btnText: {
        fontSize: Px2dp(20),
        color: Colors.text333,
    },
});