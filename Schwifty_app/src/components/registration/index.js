import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import Input from "../common/input";
import Button from "../common/button";
import TextLink from "../common/textLink";
import Loading from "../common/loading";
import axios from "axios";
import deviceStorage from "../../services/deviceStorage";
import styles from "./styles";
import { Platform } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const url =
	Platform.OS === "android"
		? "http://10.0.2.2:5000/register"
		: "http://127.0.0.1:5000/register";

const merchantUrl = Platform.OS === "android"
	? "http://10.0.2.2:5000/registerMerchant"
	: "http://127.0.0.1:5000/registerMerchant";
class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			password_confirmation: "",
			phone: "",
			upi: "",
			bname: "",
			address: "",
			error: "",
			success: false,
			loading: false,
			isMerchant: false,
		};
		this.registerUser = this.registerUser.bind(this);
		this.toggleSwitch = this.toggleSwitch.bind(this);
		this.registerMerchant = this.registerMerchant.bind(this);
	}

	onRegistrationFail(msg) {
		this.setState({
			error: msg ? msg : "Registration Failed",
			loading: false,
		});
	}

	registerUser() {
		const {
			name,
			email,
			password,
			password_confirmation,
			phone,
			bname,
			address,
			error,
			success,
			loading,
		} = this.state;

		this.setState({ error: "", loading: true });
		console.log("iran");
		if (this.state.password !== this.state.password_confirmation) {
			this.onRegistrationFail("Password and Confirm Password do not match");
		} else {
			axios
				.post(url, {
					name: name,
					email: email,
					password: password,
					phone: phone,
					address: address,
				})
				.then((response) => {
					// handle jwt response
					console.log(response);
					if (response.data.success) {
						this.setState({
							success: true,
						});
					}
				})
				.catch((error) => {
					console.log(error);
					this.onRegistrationFail();
				});
		}


	}

	registerMerchant() {
		const {
			name,
			email,
			password,
			password_confirmation,
			bname,
			upi,
			phone,
			address,
			error,
			success,
			loading,
		} = this.state;

		this.setState({ error: "", loading: true });
		console.log("iran");
		if (this.state.password !== this.state.password_confirmation) {
			this.onRegistrationFail("Password and Confirm Password do not match");
		} else {
			axios
				.post(merchantUrl, {
					name: name,
					email: email,
					password: password,
					phone: phone,
					bname: bname,
					address: address,
					vpa: upi,
				})
				.then((response) => {
					// handle jwt response
					console.log(response);
					if (response.status < 400) {
						this.setState({
							success: true,
						});
					}
				})
				.catch((error) => {
					console.log(error);
					this.onRegistrationFail();
				});
		}


	}

	toggleSwitch() {
		this.setState({
			isMerchant: !this.state.isMerchant,
		});
	}

	render() {
		const {
			name,
			email,
			password,
			password_confirmation,
			bname,
			upi,
			phone,
			address,
			success,
			error,
			loading,
		} = this.state;

		return (
			<Fragment>
				{this.state.success ? <></> :
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
				}
				<View style={styles.form}>
					<View style={styles.section}>
						<Input
							placeholder="username"
							label="Name"
							value={name}
							onChangeText={(name) => this.setState({ name })}
							editable={!this.state.success}
						/>
					</View>

					<View style={styles.section}>
						<Input
							placeholder="user@email.com"
							label="Email"
							value={email}
							onChangeText={(email) => this.setState({ email })}
							editable={!this.state.success}
						/>
					</View>

					<View style={styles.section}>
						<Input
							secureTextEntry
							placeholder="password"
							label="Password"
							value={password}
							onChangeText={(password) => this.setState({ password })}
							editable={!this.state.success}
						/>
					</View>

					<View style={styles.section}>
						<Input
							secureTextEntry
							placeholder="confirm password"
							label="Confirm Password"
							value={password_confirmation}
							onChangeText={(password_confirmation) =>
								this.setState({ password_confirmation })
							}
							editable={!this.state.success}
						/>
					</View>
					{this.state.isMerchant && (
						<View style={styles.section}>
							<Input
								secureTextEntry
								placeholder="business name"
								label="Bussiness Name"
								value={bname}
								onChangeText={(bname) => this.setState({ bname })}
								editable={!this.state.success}
							/>
						</View>
					)}

					<View style={styles.section}>
						<Input
							placeholder="Phone"
							label="Phone"
							value={phone}
							onChangeText={(phone) => this.setState({ phone })}
							keyboardType="numeric"
							editable={!this.state.success}
						/>
					</View>

					{this.state.isMerchant && (
						<View style={styles.section}>
							<Input
								placeholder="UPI"
								label="UPI"
								value={upi}
								onChangeText={(upi) => this.setState({ upi })}
								editable={!this.state.success}
							/>
						</View>)
					}

					<View style={styles.section}>
						<Input
							placeholder="Address"
							label="Address"
							value={address}
							onChangeText={(address) => this.setState({ address })}
							editable={!this.state.success}
						/>
					</View>

					<Text style={styles.errorTextStyle}>{error}</Text>

					{!this.state.success ? (
						<>
							{!this.state.loading ? (
								<Button
									onPress={
										this.state.isMerchant
											? this.registerMerchant
											: this.registerUser
									}
								>
									Register
								</Button>
							) : (
								<Loading size={"large"} />
							)}
						</>
					) : (
						<></>
					)}
				</View>

				<TextLink onPress={this.props.authSwitch}>
					{this.state.success
						? "Registered Successfully! Continue to login"
						: "Already have an account? Log in!"}
				</TextLink>
			</Fragment>
		);
	}
}

export default Registration;
