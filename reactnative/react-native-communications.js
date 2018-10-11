import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import Communications from 'react-native-communications';
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
            <ScrollView
                style={styles.container}
                keyboardShouldPersistTaps={'handled'}
            >
                <TouchableOpacity
                    onPress={() => {
                        Communications.phonecall("18801370533", true);
                    }}
                    style={styles.telBtnClick}
                    activeOpacity={.8}
                >
                    <Text>打电话</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Communications.web('http://www.baidu.com')
                    }}
                    style={styles.telBtnClick}
                    activeOpacity={.8}
                >
                    <Text>浏览器</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Communications.web('itms-apps://itunes.apple.com/cn/app/%E5%8C%BB%E6%9D%A5%E5%8C%BB%E5%BE%80/id1267680807?mt=8')
                    }}
                    style={styles.telBtnClick}
                    activeOpacity={.8}
                >
                    <Text>其他软件</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

// 样式
const styles = StyleSheet.create({

});
