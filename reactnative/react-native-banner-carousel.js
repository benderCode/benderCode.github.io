import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import px2dp from "./Tool";
import Carousel from 'react-native-banner-carousel';

export default class BannerCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArr: [{ id: "124444", linkPath: "www.qq.com", picturePath: "" },],
            dataFlag: false,
        }
    }
    render() {
        return (
            <View style={{ height: IOS ? px2dp(240) : SCREEN_HEIGHT / SCREEN_WIDTH >= 1.8 ? px2dp(220) : px2dp(165) }}>
                <Carousel
                    autoplay
                    autoplayTimeout={2500}
                    loop
                    index={0}
                    pageSize={SCREEN_WIDTH}
                    pageIndicatorContainerStyle={{ marginBottom: 5 }}// 分页器 的位置
                    pageIndicatorStyle={{ backgroundColor: '#fff' }}// 非焦点样式
                    activePageIndicatorStyle={{ backgroundColor: '#7082be' }}// 焦点样式
                >
                    {this.state.imgArr.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={1}
                                onPress={() => { }}
                            >
                                <Image source={{ uri: item.url }}
                                    onLoad={() => {
                                        this.setState({
                                            dataFlag: true,
                                        })
                                    }}
                                    onLoadEnd={() => {
                                        this.setState({
                                            dataFlag: true,
                                        })
                                    }}
                                    style={{
                                        width: SCREEN_WIDTH,
                                        height: IOS ? px2dp(240) : SCREEN_HEIGHT / SCREEN_WIDTH >= 1.8 ? px2dp(220) : px2dp(165)
                                    }} />
                            </TouchableOpacity>
                        )
                    })}
                </Carousel>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
