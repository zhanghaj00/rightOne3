/**
 * Created by zhanghao on 2016/11/14.
 */

import React,{Component} from 'react';
import {View, Modal, Text, TextInput, StyleSheet, Animated,Dimensions,Easing} from 'react-native';
import { TITLE_BAR_HEIGHT, APP_MAIN_COLOR } from '../../comm/Const';
const {width, height} = Dimensions.get('window');

const {aWidth,aHeight} = [width-38,214];
const minHeight = (width - aWidth) / 2;
class NewJdPriceInputModal extends Component{



    constructor(props){
        super(props);
        this.state = {
            offset: new Animated.Value(0),
            opacity: new Animated.Value(0),
            title: "",
            choose0: "",
            choose1: ""
        };
    }

    render() {
        if(this.props.show){
            return (<View />)
        } else {
            return (
                <View style={styles.container} >
                   {/* <Animated.View style={ styles.mask } >
                    </Animated.View>*/}
                    <Animated.View style={[styles.tip , {transform: [{
                        translateY: this.state.offset.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 115]
                        }),
                    }]
                    }]}>
                        <View><Text>fsdfsdfsdfs</Text></View>
                    </Animated.View>

                </View>

            );
        }
    }

    in() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,//一个用于定义曲线的渐变函数
                    duration: 500,//动画持续的时间（单位是毫秒），默认为500。
                    toValue: 0.8,//动画的最终值
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 1,
                }
            )
        ]).start();
    }
    out() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0,
                }
            )
        ]).start();
    }

    showMsh(){
        if(this.props.show){
            this.in();
        }else{
            this.out();
        }
    }

}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor:'#ccc',
        left:0,
        top:0,
    },
    subView: {
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
    },
    mask: {
        justifyContent:"center",
        backgroundColor:"#383838",
        opacity:0.8,
        position:"absolute",
        left:0,
        top:0,
    },
    tip: {
        width:aWidth,
        height:aHeight,
        left:minHeight,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-between",
    },
})


export default  NewJdPriceInputModal;
