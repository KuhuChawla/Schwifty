import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
				alignItems: 'center'
    },
    emailText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20
    },
    errorText: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    },
		AndroidSafeArea: {
			flex: 1,
			backgroundColor: "white",
			paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
		}
});

export default styles;