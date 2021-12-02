import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#6a82f7',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    cardContent: {
        marginVertical: 10,
        marginHorizontal: 10,
    }
  });