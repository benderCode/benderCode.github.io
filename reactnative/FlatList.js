import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native';
export default class FlatList extends Component {
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
                <StatusBar
                    animated={true}//是否动画
                    hidden={false}//是否隐藏
                    backgroundColor={'#000'}//android 设置状态栏背景颜色
                    translucent={false}//android 设置状态栏是否为透明
                    showHideTransition="fade"//IOS状态栏改变时动画 fade:默认 slide
                    networkActivityIndicatorVisible={this.state.isLoading}//IOS设定网络活动指示器(就是那个菊花)是否显示在状态栏。
                    statusBarStyle={"default"}//ios:白底黑字  android:黑底白字
                />
                <FlatList
                    style={styles.flatListStyle}// 样式
                    data={this.state.orderArr}// 数据源
                    initialNumToRender={10}// 
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderItem(item)}// 渲染
                    onRefresh={() => {
                        this.setState({
                            orderArr: [],
                            pageNo: 1,
                        })
                        this.getOrderList(1, this.state.screenActive);
                    }}//头部刷新组件
                    refreshing={this.state.isRefresh}//加载图标
                    onEndReached={() => this.onEndReached()} // 加载更多
                    onEndReachedThreshold={.1}// 加载更多触发时机
                    ListEmptyComponent={() => {
                        // 无数据时显示的内容
                        return (
                            <View style={styles.noDataBox}>
                                <Image source={require("../images/no_order.png")} />
                                <Text style={styles.noDataText}>您暂无问诊订单</Text>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        );
    }
    // renderItem = (item) => {
    //     return (
    //     )
    // }

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