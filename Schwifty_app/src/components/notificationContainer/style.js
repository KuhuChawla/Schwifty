import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2a2b4d',
        color: 'white',
    },
    navTopbar: {
        // height: '12%',
        height: deviceHeight - 680,
        backgroundColor: '#2a2b4d',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
        marginBottom: 15,
    },
    navTopbarContent: {
        color: 'white',
        fontSize: 20,
        // marginBottom: -35,
        fontWeight: 'bold',
    }
});