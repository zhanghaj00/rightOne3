/*第一次进入页面出现的欢迎动画页面*/
import React,{Component} from 'react';

import {StyleSheet,View,Text , Animated} from 'react-native';

class WelcomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
          fadeAnimCenter:new Animated.Value(0),
          fadeAnimBelow:new Animated.Value(0),
          fadeAnimComponent:new Animated.Value(1)
        }
    }


    /*组件初始化的时候开启动画*/
    componentDidMount(){
      this._fadeIn(() => {
          setTimeout(() => {
            this._fadeOut(() => this.props.onAnimEnd && this.props.onAnimEnd());
            }, 1000);
          });
    }

    /*渲染欢迎页面*/
    render(){
      let transformTitle =[{
        translateY:this.state.fadeAnimBelow.interpolate({inputRange: [0, 1], outputRange: [150, 0]}),
      }]
      return(
          <Animated.View style={[styles.container,{opacity:this.state.fadeAnimComponent}]}>
            <Animated.View style={{opacity:this.state.fadeAnimCenter}}>
              <Text style={styles.text1}>Freeloader</Text>
            </Animated.View>
            <Animated.View style={{opacity:this.state.fadeAnimBelow,transform:transformTitle}}>
              <Text style={styles.text3}>广告位招租</Text>
            </Animated.View>
          </Animated.View>
      )
    }

    /*淡入的动画，传入回调函数*/
    _fadeIn(callback){
        Animated.sequence([
          Animated.timing(this.state.fadeAnimCenter,{toValue:1,duration:1000,}),
          Animated.timing(this.state.fadeAnimBelow,{toValue:1,duration:500,}),
        ]).start(()=> callback && callback());
    }


    /*淡出的动画，传入回调函数*/
    _fadeOut(callback){
      Animated.sequence([
        Animated.timing(this.state.fadeAnimCenter,{toValue:0,duration:1000,}),
        Animated.timing(this.state.fadeAnimBelow,{toValue:0,duration:500,}),
        Animated.timing(this.state.fadeAnimComponent,{toValue:0,duration:500,}),
      ]).start(()=> callback && callback());
    }


}


/*定义样式*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C978B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text2: {
    color: '#D3D3D3',
    fontSize: 15,
  },
  text3: {
    color: '#D3D3D3',
    fontSize: 18,
    marginTop: 30,
  }
});

export default WelcomePage;
