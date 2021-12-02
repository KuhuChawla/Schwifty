import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import Input from '../common/input';
import Button from '../common/button';
import TextLink from '../common/textLink';
import Loading from '../common/loading';
import axios from 'axios';
import deviceStorage from '../../services/deviceStorage';
import styles from './styles';
import { Platform } from 'react-native';

const url = Platform.OS === "android" ? 'http://10.0.2.2:5000/register' : 'http://127.0.0.1:5000/register';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            phone: '',
            address: '',
            error: '',
            success: false,
            loading: false
        }
        this.registerUser = this.registerUser.bind(this);
    }

    onRegistrationFail() {
        this.setState({
            error: 'Registration Failed',
            loading: false
        });
    }

    registerUser() {
        const { name, email, password, password_confirmation, phone, address, error, success, loading } = this.state;

        this.setState({ error: '', loading: true });
        console.log('iran');

        axios.post(url, {

            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address

        })
            .then(response => {
                // handle jwt response
                console.log(response);
                if (response.data.success) {
                    this.setState({
                        success: true,
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                        phone: '',
                        address: '',
                        error: '',
                    })
                }

            })
            .catch(error => {
                console.log(error);
                this.onRegistrationFail();
            });
    }

    render() {
        const { name, email, password, password_confirmation, phone, address, success, error, loading } = this.state;

        return (
            <Fragment>
                <View style={styles.form}>
                    <View style={styles.section}>
                        <Input
                            placeholder="username"
                            label="Name"
                            value={name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </View>

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

                    <View style={styles.section}>
                        <Input
                            secureTextEntry
                            placeholder="confirm password"
                            label="Confirm Password"
                            value={password_confirmation}
                            onChangeText={password_confirmation => this.setState({ password_confirmation })}
                        />
                    </View>

                    <View style={styles.section}>
                        <Input
                            placeholder="Phone"
                            label="Phone"
                            value={phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </View>

                    <View style={styles.section}>
                        <Input
                            placeholder="Address"
                            label="Address"
                            value={address}
                            onChangeText={address => this.setState({ address })}
                        />
                    </View>

                    <Text style={styles.errorTextStyle}>
                        {error}
                    </Text>
                    {!this.state.success ?

                        <>
                            {!this.state.loading ?
                                <Button onPress={this.registerUser}>
                                    Register
                                </Button>
                                :
                                <Loading size={'large'} />}
                        </> : <></>
                    }
                </View>

                <TextLink onPress={this.props.authSwitch}>
                    {this.state.success ? "Registered Successfully! Continue to login" : "Already have an account? Log in!"}

                </TextLink>
            </Fragment>
        );
    }
}

export default Registration;