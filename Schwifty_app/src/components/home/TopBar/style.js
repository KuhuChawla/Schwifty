import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    topbar: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
    },
    left: {
        flexGrow: 1,
    },
    topLeft: {
        padding: 5,
        paddingLeft: 20,
        color: '#d2d2d2'
    },
    bottomLeft: {
        padding: 5,
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    right: {
        paddingRight: 10,
    }
  });