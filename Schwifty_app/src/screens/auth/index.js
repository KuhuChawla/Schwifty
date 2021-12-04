import React, { Component } from 'react';
import { View } from 'react-native';
import Login from '../../components/login';
import Registration from '../../components/registration';
import styles from './styles';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };
        this.whichForm = this.whichForm.bind(this);
        this.authSwitch = this.authSwitch.bind(this);
    }

    authSwitch() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    regSwitch() {
        this.setState({
            regPass: !this.state.regPass
        })
    }

    whichForm() {
        if (!this.state.showLogin) {
            return (
                <Registration authSwitch={this.authSwitch} regSwitch={this.regSwitch}/>
            );
        }
        else {
            return (
                <Login authSwitch={this.authSwitch} newJWT={this.props.newJWT} email={this.props.email} isMerchant={this.props.isMerchant}/>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.whichForm()}
            </View>
        );
    }
}