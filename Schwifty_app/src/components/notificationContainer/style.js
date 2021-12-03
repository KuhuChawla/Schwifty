import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        color: 'white',
    },
    navTopbar: {
        // height: '12%',
        height: deviceHeight - 790,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
        marginBottom: 15,
    },
    navTopbarContent: {
        color: '#2a2b4d',
        fontSize: 20,
        // marginBottom: -35,
        fontWeight: 'bold',
    }
});