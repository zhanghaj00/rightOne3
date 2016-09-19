/*根页面。主要来控制 根 navigator的返回，和监听硬件的退回事件*/
import React,{Component} from 'react';

import {Navigator,View,BackAndroid,StatusBar} from 'react-native';

import MainPage from './pages/mainPage'

export default class RootPage extends Component{

    constructor(props){
      super(props);
    }

    componentDidMount(){
      BackAndroid.addEventListener('hardwareBackPress',this._onback.bind(this));
    }

    componentWillUnMount(){
      BackAndroid.removeEventListener('hardwareBackPress',this._onback.bind(this));
    }

    render(){
        return(
            <View style={{flex:1}}>
              <StatusBar StatusBar translucent={true} backgroundColor={'rgba(0, 0, 0, 0.2)'} />
              <Navigator
                initialRoute={{}}
                configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.FloatFromLeft}
                renderScene={this._renderSence.bind(this)}
                />
            </View>
        )
    }

    _renderSence(route,navigator){
      if(route &&route.component){
          var {component:Component, ...route} = route;
          return <Component navigator={navigator} {...route} />;
      }
      return <MainPage navigator={navigator} {...route} />;
    }
    _onback(){
        let navigator = this.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
              navigator.pop();
                return true;
            }else {
              return false;
            }
    }
}
