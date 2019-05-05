/**
 * 截图并保持图片
 * 
 * react-native-view-shot
 * 截图产生图片 url
 * 
 * CameraRoll.saveToCameraRoll 
 * 保存到相册
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Modal, CameraRoll, ImageBackground } from 'react-native';
import { global } from '../utils/Global';
import ViewShot from "react-native-view-shot"; //长按保存图片
import * as Public from '../utils/Public';

export default class GoodsPosters extends Component {
    static defaultProps = {
        goodsDetails: {},// 商品详情
        visibleFlag: false,// 显隐藏
        click: function () { },// 事件
        type: 0,// 商品类型
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    getInitalState() {
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.content}>
                <ViewShot
                    ref="viewShot"
                    options={{ quality: 0.9 }}
                    style={styles.viewShotBox}
                >

                </ViewShot>
                <TouchableOpacity
                    onPress={() => {
                        IOS ?
                            this.refs.viewShot.capture().then(uri => {
                                CameraRoll.saveToCameraRoll(uri)
                                    .then((success) => {
                                        ToastShow({ "text": "图片已保存到相册" })
                                    }).catch((error) => {
                                        ToastShow({ "text": "图片保存失败" })
                                    })
                            })
                            :
                            Public.requestReadPermission().then(data => {
                                if (data) {
                                    this.refs.viewShot.capture().then(uri => {
                                        CameraRoll.saveToCameraRoll(uri)
                                            .then((success) => {
                                                ToastShow({ "text": "图片已保存到相册" })
                                            }).catch((error) => {
                                                ToastShow({ "text": "图片保存失败" })
                                            })
                                    })
                                } else {
                                    ToastShow({ "text": "没有获取到相关权限，请在设置中打开" })
                                }
                            })

                    }}
                    activeOpacity={.8}
                    style={styles.savePhotoClick}
                >
                    <Text style={styles.savePhotoText}>保存到相册</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    //商品详情分享弹框内容区
    viewShotBox: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        width: Px2dp(294),
        height: Px2dp(450),
        borderRadius: Px2dp(4),
    },

    // 保存图片按钮
    savePhotoClick: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Px2dp(4),
        height: Px2dp(40),
        marginTop: Px2dp(10),
    },
    savePhotoText: {
        fontSize: Px2dp(14),
        color: Colors.text333,
    },
    advListTag: {
        width: Px2dp(28),
        height: Px2dp(16),
        backgroundColor: Colors.red,
        borderRadius: Px2dp(2),
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: Px2dp(2),
    },
});