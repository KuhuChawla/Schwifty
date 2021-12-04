import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../common/loading";
import Button from "../common/button";
import { View, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const UserAcceptance = ({ jwt, email }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [ledgerId, setLedgerId] = useState(null);
    const [merchantDetails, setMerchantDetails] = useState(null);
    const [amount, setAmount] = useState(null);

    const fetchPending = async () => {
        axios.get("http://10.0.2.2:5000/user/" + email).then((res) => {
            console.log(res.data);
            const customerId = res.data.id;
            return customerId;
        }).then((customerId) => {
            axios.get("http://10.0.2.2:5000/transaction/checkLedger/" + customerId, {
                headers: {
                    Authorization: "Bearer " + jwt,
                }
            }).then((res) => {
                console.log(res.data);

                if (res.data.status === "pending") {

                    setAmount(res.data.amount);
                    setLedgerId(res.data.ledger_id);
                }
                return res.data.merchant_id;
            }).then((merchantId) => {
                if (merchantId) {
                    axios.get("http://10.0.2.2:5000/merchantFromID/" + merchantId)
                        .then((res) => {

                            console.log(res.data);
                            setMerchantDetails(res.data);
                            setLoading(false);
                            setIsPending(true);
                        })
                } else {
                    setLoading(false);
                }
            });
        })
    }

    const handleAccept = async () => {
        axios.post("http://10.0.2.2:5000/transaction/borrow", {
            ledger_id: ledgerId,
            confirm: true
        }, {
            headers: {
                Authorization: "Bearer " + jwt,
            }
        })
        navigation.navigate("Home");
    }

    const handleReject = async () => {
        await axios.post("http://10.0.2.2:5000/transaction/borrow", {
            ledger_id: ledgerId,
            confirm: false
        }, {
            headers: {
                Authorization: "Bearer " + jwt,
            }
        })
        navigation.navigate("Home");
    }

    useEffect(() => {
        fetchPending();
    }, [])

    return (
        <View style={styles.container}>
            {loading ?
                <Loading /> :
                <View>
                    {isPending ?
                        <>
                            <Text style={styles.text}>Merchant: {merchantDetails.name}</Text>
                            <Text style={styles.text}>Business: {merchantDetails.bname}</Text>
                            <Text style={styles.text}>Amount: {amount}</Text>
                            <Button onPress={handleAccept} children={"Accept"}></Button>
                            <Button onPress={handleReject} children={"Reject"}></Button>
                        </> :
                        <Text style={styles.text}>No pending</Text>}
                </View>}
        </View>
    )
}

export default UserAcceptance;