import React, { Component } from 'react';
import Loading from './src/components/common/loading';
import Auth from './src/screens/auth';
import LoggedIn from './src/screens/loggedIn';
import deviceStorage from './src/services/deviceStorage';
import { DeviceEventEmitter } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    }

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else if (!this.state.jwt) {
      return (
        <Auth newJWT={this.newJWT} />
      );
    } else if (this.state.jwt) {
      return (
        <LoggedIn jwt={this.state.jwt} deleteJWT={this.deleteJWT} />
      );
    }
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }
}