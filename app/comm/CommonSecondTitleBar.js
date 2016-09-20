import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Animated } from 'react-native';
import { TITLE_BAR_HEIGHT } from './Const';


const TAB_WIDTH = 60;
const TAB_HEIGHT = 30;

class CommonSecondTitleBar extends Component{

    constructor(props){
      super(props);

      this.state = {
        leftTabUnderline :new Animated.Value(0),
      }
    }

    render(){
      const animatedUnderline = {
        left:this.state.leftTabUnderline,
      };
      return(
          <View style={styles.container} >
              {this.props.children}
            <View style={{height: TAB_HEIGHT}} />
            <Animated.View style={[styles.indicatorBase, animatedUnderline]} />
          </View>
      )
    }

    onPageScroll(offset){
      if(offset == 0 ) return;
      this.state.leftTabUnderline.setValue(TAB_WIDTH * offset);
    }

}
class TitleBarItem extends Component{

    render(){
        return(
            <TouchableHighlight underlayColor={'rgba(0,0,0,0)'}  onPress={this.props.onTabClick}>
                <View style={styles.headerTabTextContainer}>
                    <Text style={styles.headerTabsText}>{this.props.tabText}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginRight: 5,
    alignSelf: 'flex-start',
    marginLeft:TITLE_BAR_HEIGHT,
  },
  headerTabTextContainer:{
    width:TAB_WIDTH,
    flexDirection:'column',
    justifyContent:'center',
  },
  headerTabsText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  indicatorBase: {
    position: 'absolute',
    height: 3,
    width: TAB_WIDTH,
    backgroundColor: '#19D6B4',
    bottom: 0,
  },
})

CommonSecondTitleBar.TitleBarItem = TitleBarItem;
export default CommonSecondTitleBar;
