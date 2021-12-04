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
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const url = Platform.OS === "android" ? 'http://10.0.2.2:5000/login' : 'http://127.0.0.1:5000/login';
const merchantUrl = Platform.OS === "android" ? 'http://10.0.2.2:5000/loginMerchant' : 'http://127.0.0.1:5000/loginMerchant';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isMerchant: false,
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.loginMerchant = this.loginMerchant.bind(this);
  }

  toggleSwitch() {
		this.setState({
			isMerchant: !this.state.isMerchant,
		});
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
        deviceStorage.saveKey("email", response.data.email);
        deviceStorage.saveKey("isMerchant", "false");
        this.props.newJWT(response.data.token, response.data.email, "false");
      })
      .catch((error) => {
        console.log("error!!",error);
        this.onLoginFail();
      });
  }

  loginMerchant() {
    const { email, password, password_confirmation } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post(merchantUrl, {
      email: email,
      password: password
    })
      .then((response) => {
        deviceStorage.saveKey("id_token", response.data.token);
        deviceStorage.saveKey("email", response.data.email);
        deviceStorage.saveKey("isMerchant", "true");
        this.props.newJWT(response.data.token, response.data.email, "true");
      })
      .catch((error) => {
        console.log("error!!",error);
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
        <View style={styles.toggle}>
						<Text style={styles.toggleText}>Are you a merchant? </Text>
						<BouncyCheckbox
							size={25}
							fillColor="mediumpurple"
							unfillColor="#FFFFFF"
							disableText
							iconStyle={{ borderColor: "rebeccapurple" }}
							textStyle={styles.toggleText}
							onPress={() => this.toggleSwitch()}
						/>
					</View>
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
            <Button onPress={this.state.isMerchant? this.loginMerchant :this.loginUser}>
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