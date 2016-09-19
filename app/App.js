import React,{Component} from 'react';

import {Provider} from 'react-redux';
import store from './store';

import RootPage from "./RootPage";
import WelcomePage from './WelcomePage';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isWelcomePage:true,
    }
  }
  render(){
      if(this.state.isWelcomePage){
          return <WelcomePage onAnimEnd={() => this.setState({isWelcomePage: false})} />;
      }else{
        return (<Provider store={store}>
          <RootPage />
        </Provider>
          )
      }
  }
}


