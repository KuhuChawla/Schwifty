import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from './style';

const PaymentTransfer = () => {
    const [payeeName, setPayeeName] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');

    const handlePayee = (val) => {
        console.log(val);
    };

    const handleDescription = (val) => {
        console.log(val);
    };

    const handleAmount = (val) => {
        console.log(val);
    };

    return (
        <View style={styles.container}>
            <View style={styles.moneyTransferTopbar}>
                <Text style={styles.moneyTransferTopbarContent}>Transfer</Text>
            </View>
            <View styles={styles.inputFieldsContainer}>
                <View style={styles.payeeDetailsContainer}>
                    <View style={styles.inputField}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Payee:</Text>
                        <TextInput
                            style={styles.payee}
                            keyboardType='default'
                            onChangeText={(val) => { handlePayee(val) }}
                        />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={{ color: 'white', fontSize: 15 }}>For:</Text>
                        <TextInput
                            style={styles.payingFor}
                            keyboardType='default'
                            onChangeText={(val) => { handleDescription(val) }}
                        />
                    </View>
                </View>
                <View style={styles.amountFieldContainer}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Amount
                    </Text>
                    <View style={styles.inputField}>
                        <Text style={{ color: 'white', fontSize: 35 }}>&#8377;</Text>
                        <TextInput
                            style={styles.amount}
                            keyboardType='numeric'
                            onChangeText={(val) => { handleAmount(val) }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PaymentTransfer;