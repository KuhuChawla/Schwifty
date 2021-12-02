import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelStyle: {
        fontSize: 16,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3
    }
});

export default styles;