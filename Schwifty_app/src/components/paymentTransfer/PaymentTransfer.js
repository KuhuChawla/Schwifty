import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AppB from '../PaymentPage/button';
import styles from './style';
import Loading from '../common/loading';

const PaymentTransfer = ({ jwt, email }) => {
	const [payeeEmail, setPayeeEmail] = useState('');
	const [description, setDescription] = useState('');
	const [contact, setContact] = useState('');
	const [amount, setAmount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [confirmation, setConfirmation] = useState('');

	const handlePayee = (val) => {
		setPayeeEmail(val);
	};

	const handleDescription = (val) => {
		setDescription(val);
	};

	const handleAmount = (val) => {
		setAmount(val);
	};

	const checkConfirmation = async (ledger_id) => {
		const url = "http://10.0.2.2:5000/transaction/check/";
		return axios.get(url + ledger_id, {
			headers: {
				Authorization: "Bearer " + jwt,
			}
		});
	}

	const handleSubmit = async () => {
		setLoading(true);
		axios.get("http://10.0.2.2:5000/user/" + payeeEmail).then((res) => {
			console.log(res.data);
			const customerId = res.data.id;
			return customerId;
		}).then((customerId) => axios.post("http://10.0.2.2:5000/transaction/lend", {
			user: customerId,
			amount: amount,
			details: description,
		}, {
			headers: {
				Authorization: "Bearer " + jwt,
			}
		}).then((response) => {
			if (response.data.status) {
				let count = 0;
				var newInterval = setInterval(() => {
					checkConfirmation(response.data.ledger_id).then((res) => {
						count++;
						if (res.status >= 400) {
							setConfirmation("Transaction failed");
							clearInterval(newInterval);
						}
						if (res.data.status === "success") {
							setConfirmation(res.data.message);
							clearInterval(newInterval);
						}
					});

				}, 1000);
				if (count > 60) {
					setConfirmation("Transaction failed");
					setLoading(false);
					clearInterval(newInterval);
				}
			}
		})
		).catch((err) => {
			console.log(err);
			setLoading(false);
		});
	}
	if (confirmation === "success") {
		return (
			<View style={styles.container}>
				<Text style={{ color: "#000" }}>The Credit was accepted!</Text>
			</View>
		)
	} else {
		return (
			<View style={styles.container}>
				{loading ? <Loading /> :
					<>{confirmation === "Transaction failed" ? <Text style={{ color: "#000" }}>{confirmation}</Text> :
						<>
							<View style={styles.moneyTransferTopbar}>
								<Text style={styles.moneyTransferTopbarContent}>Transfer</Text>
							</View>
							<View styles={styles.inputFieldsContainer}>
								<View style={styles.payeeDetailsContainer}>
									<View style={styles.inputField}>
										<Text style={{ color: '#2a2b4d', fontSize: 15 }}>Payee Email:</Text>
										<TextInput
											style={styles.payee}
											keyboardType='default'
											onChangeText={(val) => { handlePayee(val) }}
										/>
									</View>
									<View style={styles.inputField}>
										<Text style={{ color: '#2a2b4d', fontSize: 15 }}>For:</Text>
										<TextInput
											style={styles.payingFor}
											keyboardType='default'
											onChangeText={(val) => { handleDescription(val) }}
										/>
									</View>
								</View>
								<View style={styles.amountFieldContainer}>
									<Text style={{ color: '#2a2b4d', fontSize: 20 }}>
										Amount
									</Text>
									<View style={styles.inputField}>
										<Text style={{ color: '#2a2b4d', fontSize: 35 }}>&#8377;</Text>
										<TextInput
											style={styles.amount}
											keyboardType='numeric'
											onChangeText={(val) => { handleAmount(val) }}
										/>
									</View>
								</View>
							</View>
							<AppB title={"Add Credit"} onPress={handleSubmit} />
						</>
					}
					</>
				}
			</View>
		);
	}


}

export default PaymentTransfer;