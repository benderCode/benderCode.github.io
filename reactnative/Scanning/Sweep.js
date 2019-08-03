/** 
 * 原生相机 -- 扫一扫功能
 * react-native-camera
 * https://github.com/react-native-community/react-native-camera
 * 
 * 原生相机组建 可 实现 扫一扫、录像、拍照 等功能
 * 
 * 
*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Vibration, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';

import { global } from '../../utils/Global';
import Fetch from '../../network/Fetch';
import { requestUrl } from '../../network/Url';
import * as Public from '../../utils/Public'
import { RNCamera } from 'react-native-camera';
import Nav from '../../components/Nav';
import backIcon from './backIcon.png';//返回按钮
import scanLine from './scan_line.png';//扫描线
import Loading from '../../components/Loading'; // 加载层

export default class Sweep extends Component {
    constructor(props) {
        super(props);
        this.camera = null;
        this.state = {
            isLoading: false,
            result: "",// 掃描結果
            openFlash: false,// 手电筒
            flag: true,
            active: true,
            fadeInOpacity: new Animated.Value(0), // 初始值
            isEndAnimation: false,//结束动画标记
        }
        this._goBack = this._goBack.bind(this);
        this._startAnimation = this._startAnimation.bind(this);
        this.barcodeReceived = this.barcodeReceived.bind(this);
        this._changeFlash = this._changeFlash.bind(this);
    }
    componentDidMount() {
        this._startAnimation(false);
    }
    //开始动画，循环播放
    _startAnimation(isEnd) {
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear
        }).start(
            () => {
                if (isEnd) {
                    this.setState({
                        isEndAnimation: true
                    });
                    return;
                }
                if (!this.state.isEndAnimation) {
                    this.state.fadeInOpacity.setValue(0);
                    this._startAnimation(false)
                }
            }
        );
    }
    barcodeReceived(e) {
        // e.data 扫描得到的内容
        if (e.data) {
            this.setState({
                isLoading: true,
                result: e.data,
            });
            try {
                // 处理后续逻辑
            } catch (error) {
                this.setState({
                    isLoading: false,
                    active: false,
                })
            }
        }
    }
    //返回按钮点击事件
    _goBack() {
        this.setState({
            isEndAnimation: true,
        });
        this.props.navigation.goBack();
    }
    //开灯关灯
    _changeFlash() {
        this.setState({
            openFlash: !this.state.openFlash,
        });
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Nav title={"扫一扫"} leftClick={this._goBack} />
                {(() => {
                    if (!this.state.isLoading) {
                        if (this.state.active) {
                            return (
                                <RNCamera
                                    ref={cam => this.camera = cam}
                                    style={styles.cameraStyle}
                                    barcodeScannerEnabled={true}
                                    onBarCodeRead={
                                        this.barcodeReceived
                                    }
                                    flashMode={this.state.openFlash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                                    googleVisionBarcodeMode={IOS ? 'normal' : RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE}
                                >
                                    <View style={styles.centerContainer} />
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={styles.fillView} />
                                        <View style={styles.scan}>
                                            <Animated.View style={[styles.scanLine, {
                                                opacity: 1,
                                                transform: [{
                                                    translateY: this.state.fadeInOpacity.interpolate({
                                                        inputRange: [0, 1],
                                                        outputRange: [0, 220]
                                                    })
                                                }]
                                            }]}>
                                                <Image source={scanLine} />
                                            </Animated.View>
                                        </View>
                                        <View style={styles.fillView} />
                                    </View>
                                    <View style={styles.bottomContainer}>
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    textAlign: 'center',
                                                    width: 220,
                                                    marginTop: 25,
                                                },
                                            ]}
                                            numberOfLines={2}
                                        >
                                            将二维码/条码放入框内，即可自动扫描
                                        </Text>
                                        <TouchableOpacity onPress={this._changeFlash}>
                                            <View style={styles.flash}>
                                                <Image source={require('./lamp.png')} />
                                                <Text style={styles.text}>
                                                    开灯/关灯
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </RNCamera>
                            );
                        } else {
                            return (
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onLongPress={() => {
                                            if (Public.copyContent(this.state.result)) {
                                                ToastShow({ "text": "复制成功" })
                                            }
                                        }}
                                        activeOpacity={1}
                                    >
                                        <Text style={{ fontSize: Px2dp(14), padding: Px2dp(10), textAlign: 'center' }}>{this.state.result}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    } else {
                        <Loading />
                    }
                })()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBg,
    },
    cameraStyle: {
        width: SCREEN_WIDTH,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flash: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 60,
    },
    text: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5
    },
    icon: {
        color: '#fff',
        fontSize: 20,
    },
    scanLine: {
        alignSelf: 'center',
    },
    centerContainer: {
        height: IOS ? 150 : 110,
        width: SCREEN_WIDTH,
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    bottomContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.4)',
        alignSelf: 'center',
        flex: 1,
        width: SCREEN_WIDTH
    },
    fillView: {
        width: (SCREEN_WIDTH - 220) / 2,
        height: 220,
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    scan: {
        width: 220,
        height: 220,
        alignSelf: 'center'
    }
});