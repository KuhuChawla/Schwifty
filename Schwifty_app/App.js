import React, { Component } from 'react';
import Loading from './src/components/common/loading';
import Auth from './src/screens/auth';
import LoggedIn from './src/screens/loggedIn';
import deviceStorage from './src/services/deviceStorage';
import { DeviceEventEmitter, View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  text: {
      color: '#000',
      fontWeight: '700',
      fontSize: 20,
      marginTop: 30
  },
  image: { 
      width: 150,
      height: 150 
  },
  title: { 
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      color:'#000'
  },
  buttonCircle: {
      width: 80,
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
})

const slides = [
  {
    key: 1,
    title: 'Track Payments',
    text: 'Keep a track of all your transactions',
    image: require('./assets/transaction-history.png'),
    // backgroundColor: '',
  },
  {
    key: 2,
    title: 'Lend Money',
    text: 'Track your lent and borrowed money',
    image: require('./assets/creditCash.png'),
    // backgroundColor: '#febe29',
  },
{
  key: 3,
    title: 'Track Credits',
      text: 'Get credit score based on your history',
        image: require('./assets/coins.png'),
    // backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      jwt: '',
      loading: true
    };

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>

      </View>
    );
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textButton}>
          Done
        </Text>
      </View>
    );

  }

  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textButton}>
          Skip
        </Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textButton}>
          Next
        </Text>
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if (this.state.showRealApp) {
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
      };
    } else {
      return <AppIntroSlider
        activeDotStyle={{ width: 40, backgroundColor: '#39316a' }}
        dotStyle={{ width: 40, backgroundColor: '#f2f1f6' }}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        showSkipButton={true}
        renderDoneButton={this._renderDoneButton}
        renderSkipButton={this._renderSkipButton}
        renderNextButton={this._renderNextButton}
      />;
    }
  }
}