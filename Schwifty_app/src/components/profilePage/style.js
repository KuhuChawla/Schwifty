import { Dimensions, StyleSheet } from "react-native";
const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  card: {
    width: deviceWidth - 50,
    height: 50,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#353763',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 10,
    justifyContent: 'center'
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    width: deviceWidth - 50,
    height: 50,
    borderRadius: 10,
    elevation: 6,
    backgroundColor: '#2a2b4d',
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 10,
    justifyContent: 'center'
}
});


export default styles;