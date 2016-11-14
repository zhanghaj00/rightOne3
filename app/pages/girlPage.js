/* 妹子首页。主要展示图片，和点击图片的放大  带回复功能*/
/* 暂时用作信息展示页面 debug 用*/

import React from 'react';
import {View,Text} from 'react-native';

//import  {jdGoodsHelp} from '../db/operation/jdGoodsHelp';



class GirlPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            html:''
        }
    }

    dealWithGoodUrl(url){
        //jdGoodsHelp(url,this.dealWithGood.bind(this));
    }

    dealWithGood(obj){
        this.setState({html:"woriririri"});
        this.setState({html:obj.price});
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
