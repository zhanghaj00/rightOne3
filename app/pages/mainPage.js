/*带 抽屉的主页面*/
import React,{Component} from 'react';

import {View,Navigator,Text,DrawerLayoutAndroid ,TouchableNativeFeedback, StyleSheet, Platform} from 'react-native';
import {connect} from 'react-redux';

import GirlPage from './girlPage';
import NewsPage from './newsPage';

import {NAVIGATOR_FLAG,NAVIGATOR_TAB} from '../action/types';

class MainPage extends Component{

    constructor(props){
      super(props);

      this.state = {
        currentTag :NAVIGATOR_TAB.HOME
      }
      //定义方法
      this.onDrawerOpen = this._onDrawerMenuOpen.bind(this);

      this.ROUTE_STACKS = [
        {component:NewsPage},
        {component:GirlPage}
      ]
    }

    render(){
        return(
          <DrawerLayoutAndroid
            ref="drawer"
            drawerWidth={290}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={this._renderDrawerLayoutView.bind(this)}>
            <Navigator
                ref = {component => this.navigator = component}
                navigator={this.props.navigator}
                configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.FloatFromLeft}
                initialRoute={this.ROUTE_STACKS[0]}
                initialRouteStack={this.ROUTE_STACKS}
                renderScene={this._renderSence.bind(this)}
              />
          </DrawerLayoutAndroid>
        )
    }

    _renderSence(route,navigator){
        var{component:Component,...route} = route;
        return <Component {...route} navigator={this.props.navigator} onDrawerOpen={this.onDrawerOpen} currentTag={this.state.currnetTag}/>
    }

    _ontabSelect(tab){
        if(this.props.tab !== tab){
            this.props.dispatch({type:NAVIGATOR_FLAG,tab:tab});

            this.setState({currentTag:tab});
            switch(tab){
              case NAVIGATOR_TAB.HOME:
                this.navigator.jumpTo(this.ROUTE_STACKS[0]);
                break;
              case NAVIGATOR_TAB.GIRL:
                this.navigator.jumpTo(this.ROUTE_STACKS[1]);
                break;
            }

        }
    }
    _renderDrawerLayoutView(){
      return (
        <View style={styles.container} >
            <View  style={styles.drawerHeaderContainer}>
        <Text style={styles.drawerHeaderText1}>这是一个有味道的地方</Text>
        <Text style={styles.drawerHeaderText1}>张浩</Text>
        <Text style={styles.drawerHeaderText1}>主要有新闻，图片，视频。呵呵</Text>
      </View>
      {this._renderDrawerItem(NAVIGATOR_TAB.HOME, '新闻')}

      {this._renderDrawerItem(NAVIGATOR_TAB.GIRL, '推荐')}

      {this._renderDrawerItem(NAVIGATOR_TAB.HOME, '妹纸')}

      {this._renderDrawerItem(NAVIGATOR_TAB.GIRL, '视频')}
    </View>
      )
    }

    _renderDrawerItem(tab,itemName){
        return(
          <TouchableNativeFeedback onPress={this._ontabSelect.bind(this,tab)}>
            <View style={styles.drawerItemContainer}>
              <Text style={styles.drawerItemText}>{itemName}</Text>
            </View>
          </TouchableNativeFeedback>
        )
    }

    //打开抽屉
    _onDrawerMenuOpen(){
      this.refs.drawer.openDrawer();
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    drawerHeaderContainer:{
        height:140,
        paddingRight:10,
        paddingLeft:10,
        backgroundColor:'#8C978B',
        justifyContent:'center',
        paddingTop: (Platform.OS === 'android' && Platform.Version < 19) ? 0 : (Platform.OS === 'android' ? 24 : 20),
    },
    drawerHeaderText1:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    drawerItemContainer: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
    },
    drawerItemText: {
        color: '#999999',
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 16,
        textAlignVertical: 'center',
    },
});


function select(store){
  return{
    tab:store.navigatorReducer.tab
  }
};
export default connect(select)(MainPage);
