/**
 * Created by zhanghao on 2016/11/14.
 */

import React,{Component} from 'react';
import {View, Modal, Text, TextInput, StyleSheet} from 'react-native';
import { TITLE_BAR_HEIGHT, APP_MAIN_COLOR } from '../../comm/Const';

class JdPriceInputModal extends Component{



    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.show}
                onShow={() => {}}
                onRequestClose={() => {}} >
                <View style={styles.container}>
                    <View style={styles.subView}><Text>helloworld</Text></View>
                </View>
            </Modal>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        // marginTop:TITLE_BAR_HEIGHT,
        backgroundColor:'#ccc',
        // alignItems: 'center',
        // justifyContent:'center',
        flex:1,
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

})


export default  JdPriceInputModal;
