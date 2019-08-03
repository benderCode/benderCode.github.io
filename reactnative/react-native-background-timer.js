/** 
 * 锁屏倒计时
 * react-native-background-timer
 * https://github.com/ocetnik/react-native-background-timer
 * 
 * 解决app在锁屏状态下js倒计时暂停问题
*/


import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import BackgroundTimer from 'react-native-background-timer';//锁屏倒计时

export default class CountDown extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            timerText: '--:--',
            surplus: 0,// 剩余的秒数
            obj: {
                day: "--",
                hour: "--",
                minute: "--",
                second: "--",
            },
        }
    }

    componentWillMount() {
        // 关闭定时器
        this.timer && BackgroundTimer.clearInterval(this.timer);
    }

    componentDidMount() {
        // 开启定时器
        this._startTimer();
    }

    componentWillUnmount() {
        this.timer && BackgroundTimer.clearInterval(this.timer);
    }


    render() {
        return (
            <View>

            </View>
        )
    }

    //开启定时器
    _startTimer() {
        this.timer = BackgroundTimer.setInterval(() => {
            this._timeOperation();
        }, 1000);
    }
}