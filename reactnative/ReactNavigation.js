import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { global } from "./utils/Global";
// tab图标 - start
const IndexIcon = require('./images/tab_index.png');
const IndexEleIcon = require('./images/tab_ele_index.png');
const ContactIcon = require('./images/tab_contact.png');
const ContactEleIcon = require('./images/tab_ele_contact.png');
const MyIcon = require('./images/tab_my.png');
const MyEleIcon = require('./images/tab_ele_my.png');
// tab图标 - end

// 页面引入-start
import Start from "./Start";// 启动页

import SignUp from "./sign/SignUp";// 注册
import SignIn from "./sign/SignIn";// 登录
import SignCodeIn from "./sign/SignCodeIn";// 验证码登录
import ForgetPassword from "./sign/ForgetPassword";// 忘记密码

import Approve from "./approve/Approve";// 认证页面

import IndexTab from "./home/Home";// 工作台
// 页面引入-end

// tab-start
const TabOptions = (tabBarTitle, normalImage, selectedImage) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ focused, tintColor }) => {
        // focused 焦点  tintColor该样式可以覆盖图片颜色
        return (
            <View style={styles.tabBox}>
                <Image
                    source={focused ? normalImage : selectedImage}
                    style={[styles.tabImg]}
                />
                <Text style={[{
                    color: focused ? '#2c6cb5' : '#999999',
                    paddingTop: Platform.OS === 'ios' ? 4 : 0,
                }, styles.tabText]}>{tabBarTitle}</Text>
            </View>
        )
    });
    const tabBarVisible = true;
    return { tabBarLabel, tabBarIcon, tabBarVisible };
};
// 底部Tab栏 - start
const MainView = createBottomTabNavigator({
    TabHomePage: {
        screen: IndexTab,
        navigationOptions: () => TabOptions('工作台', IndexIcon, IndexEleIcon),
    },
    TabContactPage: {
        screen: ContactTab,
        navigationOptions: () => TabOptions('通讯录', ContactIcon, ContactEleIcon),
    },
    TabMyPage: {
        screen: MyTab,
        navigationOptions: () => TabOptions('个人中心', MyIcon, MyEleIcon),
    },
}, {
        initialRouteName: "TabHomePage",//第一次加载时初始选项卡路由的routeName
        swipeEnabled: false,//滑动切换
        animationEnabled: false,//点击切换是否有滑动效果
        backBehavior: 'none',//返回键是否回到换到初始路由
        lazy: true,
        tabBarOptions: {
            labelStyle: {//标签栏文字的样式
                padding: 0,
                margin: 0,
                fontSize: 12,
            },
            tabStyle: {//选项卡的样式。
                height: global.IPhoneX ? 50 + global.TabBar : 50,
                paddingBottom: global.IPhoneX ? global.TabBar : 0,
            },
            style: {//标签栏的样式
                // height: 50,
            },
            activeBackgroundColor: 'white',// 活动选项卡的背景颜色(选中)
            activeTintColor: '#2c6cb5',// 活动选项卡的标签和图标颜色(选中)
            inactiveBackgroundColor: 'white',//非活动选项卡的背景颜色。(未选中)
            inactiveTintColor: '#999999',//非活动选项卡的标签和图标颜色。(未选中)
            showIcon: true,
            showLabel: false,
            pressOpacity: 0.8,
            indicatorStyle: {
                height: 0,
            }
        },
    });
// tab 样式
const styles = StyleSheet.create({
    tabBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabImg: {
        width: 22,
        height: 22,
    },
    tabText: {
        fontSize: 12,
    },
});
// 底部tab - end

export default createStackNavigator(
    {
        Start: {
            screen: Start,//启动页
        },
        SignUp: {
            screen: SignUp,//注册
        },
        SignIn: {
            screen: SignIn,//登录
            navigationOptions: {
                gesturesEnabled: false,// IOS侧滑返回
            }
        },
        SignCodeIn: {
            screen: SignCodeIn,//验证码登录
        },
        ForgetPassword: {
            screen: ForgetPassword,//忘记密码
        },
        Approve: {
            screen: Approve,//认证页面
        },
        Home: {
            screen: MainView,//工作台
            navigationOptions: {
                header: null,
            }
        },
    }, {
        initialRouteName: "Start",// 设置堆栈的默认屏幕
    }
);

// 重置路由栈 - start
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
});
this.props.navigation.dispatch(resetAction);
// 重置路由栈 - end

// 去除默认导航头
// static navigationOptions = {
//     header: null,
// };

// 页面切换监听 - start
import { NavigationEvents } from "react-navigation";
<NavigationEvents
    onWillFocus={() => {
        // 具体操作
    }}
    onDidFocus={payload => console.log('did focus', payload)}
    onWillBlur={payload => console.log('will blur', payload)}
    onDidBlur={payload => console.log('did blur', payload)}
/>
// 页面切换监听 - end
