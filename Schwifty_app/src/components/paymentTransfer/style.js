import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    moneyTransferTopbar: {
        height: '12%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    moneyTransferTopbarContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    inputFieldsContainer: {

    },
    payeeDetailsContainer: {
        margin: 12,
        marginTop: 70,
    },
    amountFieldContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
    },
    inputField: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    payee: {
        width: 290,
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        margin: 10,
        borderRadius: 10,
        marginLeft: 'auto',
        fontSize: 18,
        color: 'white'
    },
    payingFor: {
        width: 290,
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        margin: 10,
        borderRadius: 10,
        marginLeft: 'auto',
        fontSize: 18,
        color: 'white'
    },
    amount: {
        width: 150,
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 8,
        margin: 10,
        borderRadius: 10,
        fontSize: 35,
        color: 'white'
    }
})