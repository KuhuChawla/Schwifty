import { Dimensions, StyleSheet } from "react-native";
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  card: {
      width: deviceWidth - 30,
      height: 70,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#55599e',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
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
});


export default styles