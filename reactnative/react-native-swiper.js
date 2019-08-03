/**
 * 轮播图
 * react-native-swiper
 * https://github.com/leecade/react-native-swiper
 * 
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { global } from '../utils/Global';
import * as Public from '../utils/Public';
import Swiper from 'react-native-swiper';

export default class Swiper extends Component {
    static defaultProps = {

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
                <Swiper
                    loop={true}// 轮播
                    showsButtons={false}// 按钮
                    showsPagination={false}// 分页器
                    horizontal={false}// 横竖方向
                    autoplay={true}// 自动播放
                    autoplayTimeout={3}// 切换时间 单位s
                    height={Px2dp(37)}// 高度
                    onIndexChanged={0}// 初始索引
                >
                    <Text key={0} numberOfLines={1}>{0}</Text>
                    <Text key={1} numberOfLines={1}>{1}</Text>
                    <Text key={2} numberOfLines={1}>{2}</Text>
                    {/* {this.state.noticeList.map((item, index) => {
                        return (
                        )
                    })} */}
                </Swiper>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
});