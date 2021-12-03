import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../../components/home";
import Profile from "../../../components/profilePage/profile";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ deleteJWT }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Profile" options={{
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTintColor: '#2a2b4d',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}>
                {() => <Profile deleteJWT={deleteJWT} />}
            </HomeStack.Screen>
<<<<<<< Updated upstream
=======
            <HomeStack.Screen name="Schwifty Score" options={{
                // headerStyle: {
                //     backgroundColor: '#2a2b4d',
                //     elevation: 0,
                //     shadowOpacity: 0
                // },
                headerTintColor: '#2a2b4d',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }} component={SchwiftyScorePage} />
>>>>>>> Stashed changes
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;