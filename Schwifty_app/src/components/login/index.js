import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import Input from '../common/input';
import Button from '../common/button';
import TextLink from '../common/textLink';
import Loading from '../common/loading';
import axios from 'axios';
import styles from './styles';
import deviceStorage from '../../services/deviceStorage';
import { Platform } from 'react-native';

const url = Platform.OS === "android" ? 'http://10.0.2.2:5000/login' : 'http://127.0.0.1:5000/login';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  loginUser() {
    const { email, password, password_confirmation } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post(url, {
      email: email,
      password: password
    })
      .then((response) => {
        deviceStorage.saveKey("id_token", response.data.token);
        this.props.newJWT(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        this.onLoginFail();
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Login Failed',
      loading: false
    });
  }

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <Fragment>
        <View style={styles.form}>
          <View style={styles.section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Text style={styles.errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button onPress={this.loginUser}>
              Login
            </Button>
            :
            <Loading size={'large'} />}

        </View>
        <TextLink onPress={this.props.authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}


export default Login;