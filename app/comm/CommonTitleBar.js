import React,{Component,PropTypes} from 'react';
import {View,Text,StyleSheet,Image,Platform} from 'react-native';

import CommonTouchComponent from './CommonTouchComponent';
import CommonSecondTitleBar from './CommonSecondTitleBar';
import { TITLE_BAR_HEIGHT, APP_MAIN_COLOR } from './Const';

const IMG_BACK_SRC = require('../img/icon/ic_back.png');
const IMG_DRAWER_TOGGLE_SRC = require('../img/icon/ic_drawer_toggle.png');

class CommonTitleBar extends Component{

    static propTypes = {
      title:PropTypes.string,
    }

    constructor(props){
      super(props);
      this.isMainPage = this.props.isMainPage;

    }

    render(){
        let titleBarBackgoundRgba = `rgba(156, 151, 139, 1)`;
      return(
        <View style={[{backgroundColor: titleBarBackgoundRgba},styles.container]}>
          <View style={styles.titleBarContainer}>
          <CommonTouchComponent onPress={this.props.onLeftButtonClick}>
            <View style={styles.btnContainer}>
                <Image source={this.isMainPage ? IMG_DRAWER_TOGGLE_SRC : IMG_BACK_SRC} />
            </View>
          </CommonTouchComponent>
          <Text style={styles.titleBarTitle} numberOfLines={1}>{this.props.title}</Text>
        </View>
        {this._renderHeaderTabContent()}
      </View>
      )
    }

    onPageScroll(offset) {
      this.refs.titleBarHeaderTab.onPageScroll(offset);
    }


    _renderHeaderTabContent() {
        if (typeof this.props.children === 'undefined') {
          return;
        }

        return (
          <CommonSecondTitleBar ref="titleBarHeaderTab">
            {this.props.children}
          </CommonSecondTitleBar>
        )
      }

}

const styles = StyleSheet.create({
  container:{
    paddingTop:(Platform.OS === 'android' && Platform.Version < 19 )?0:(Platform.OS==='android'?24:20),
  },
  titleBarContainer: {
    flexDirection: 'row',
    height: TITLE_BAR_HEIGHT,
  },
  btnContainer:{
    width:TITLE_BAR_HEIGHT,
    height:TITLE_BAR_HEIGHT,
    alignItems:'center',
    justifyContent:'center'
  },
  titleBarTitle:{
    flex:1,
    alignSelf:'center',
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: Platform.OS === 'android' ? 'left' : 'center',
  }


})
CommonTitleBar.TitleBarItem =  CommonSecondTitleBar.TitleBarItem;

export default  CommonTitleBar;
