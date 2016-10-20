/**
 * Created by zhanghao on 2016/9/20.
 */
import React,{Component} from 'react';


import {StyleSheet, ViewPagerAndroid,Platform,View,Text} from 'react-native';


class CommViewPage extends Component{

    constructor(props){
        super(props);
        this.state={
            width:0,
            height:0,
            pageSelected:this.props.selectedIndex,
            initPageSelected:this.props.selectedIndex,
            scrollingTo: null,
        }
        this.adjustCardSize = this._adjustCardSize.bind(this);
    }
    _adjustCardSize(event) {
        this.setState({
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIndex !== this.state.selectedIndex) {
            if (Platform.OS === 'ios') {
                this.refs.scrollview.scrollTo({
                    x: nextProps.selectedIndex * this.state.width,
                    animated: true,
                });
                this.setState({scrollingTo: nextProps.selectedIndex});
            } else {
                this.refs.scrollview.setPage(nextProps.selectedIndex);
                this.setState({pageSelected: nextProps.selectedIndex});
            }
        }
    }


    render(){
       return  this._renderAndroid();
    }


    _renderContent(){
        let { width, height } = this.state;
        let style = Platform.OS === 'ios' && styles.card;
        return React.Children.map(this.props.children, (child, i) => (
            <View style={[style, {width, height}]} key={'r_' + i}>
                {child}
            </View>
        ));
    }
    //TODO IOS item 渲染
    _renderIos(){}
    _renderAndroid(){
        return(
            <ViewPagerAndroid
                ref="scrollview"
                initialPage={this.state.initPageSelected}
                onPageSelected={this._handleHorizontalScroll.bind(this)}
                onPageScroll={(event)=>{this.props.onViewPageScroll&&this.props.onViewPageScroll(event.nativeEvent.position + event.nativeEvent.offset)}}
                style={styles.container}>
                {this._renderContent()}
            </ViewPagerAndroid>
        )
    }


    _handleHorizontalScroll(event) {
        let selectedIndex = event.nativeEvent.position;
        if (selectedIndex === undefined) {
            selectedIndex = Math.round(
                event.nativeEvent.contentOffset.x / this.state.width,
            );
        }

        if (selectedIndex < 0 || selectedIndex >= this.props.count) {
            return;
        }

        if (this.state.scrollingTo !== null && this.state.scrollingTo !== selectedIndex) {
            return;
        }

        if (this.props.selectedIndex !== selectedIndex || this.state.scrollingTo !== null) {
            this.setState({selectedIndex, scrollingTo: null});
            const { onSelectedIndexChange } = this.props;
            onSelectedIndexChange && onSelectedIndexChange(selectedIndex);
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    card: {
        backgroundColor: 'transparent',
    }
});

export default CommViewPage;