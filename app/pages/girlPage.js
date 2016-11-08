/* 妹子首页。主要展示图片，和点击图片的放大  带回复功能*/

import React from 'react';
import {View,Text} from 'react-native';

import  {jdGoodsHelp} from '../db/operation/cheerioHelp';



class GirlPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            html:''
        }
    }

    dealWithGoodUrl(url){
        jdGoodsHelp(url,this.dealWithGood.bind(this));
    }

    dealWithGood(obj){
        this.setState({html:"woriririri"});
        this.setState({html:obj.img});
    }

    render(){
      return(
        <View>
          <Text>{this.state.html}
          </Text>
        </View>
      )
    }

    componentDidMount() {
        this.setState({html:"helloworld"});
        this.dealWithGoodUrl("1");
    }
}

export default GirlPage;
