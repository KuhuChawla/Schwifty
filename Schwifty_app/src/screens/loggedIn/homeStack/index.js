import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../../components/home";
import Profile from "../../../components/profilePage/profile";
import SchwiftyScorePage from "../../../components/schwiftyScore";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ deleteJWT }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Profile">
                {() => <Profile deleteJWT={deleteJWT} />}
            </HomeStack.Screen>
            <HomeStack.Screen name="Schwifty Score" component={SchwiftyScorePage} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;