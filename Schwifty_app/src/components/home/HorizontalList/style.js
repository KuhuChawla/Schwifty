import { Dimensions, StyleSheet } from "react-native";
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceheight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
    horizontalCard: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#379951',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginLeft: 15,
        minWidth: deviceWidth - 230,
        minHeight: deviceheight -680
    },
    horizontalListName: {
        marginTop: 10,
        color: 'white',
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 30,
    },
    horizontalListMoney: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        paddingLeft: 15
    },
    horizontalCardContent: {
        marginHorizontal: 15,
        marginVertical: 15,
    }
});