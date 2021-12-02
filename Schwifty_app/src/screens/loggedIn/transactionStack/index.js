import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransHistory from "./transHistory";
import Payment from "../../../components/PaymentPage/payment";

const TransactionStack = createNativeStackNavigator();

const TransactionStackScreen = () => {
    return (
        <TransactionStack.Navigator>
            <TransactionStack.Screen name="TransactionHistory" component={TransHistory} options={{headerShown: false}}/>
            <TransactionStack.Screen name="PaymentPage" component={Payment}/>
        </TransactionStack.Navigator>
    )
}

export default TransactionStackScreen;