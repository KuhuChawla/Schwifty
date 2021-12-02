import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from "./notifications";

const NotificationStack = createNativeStackNavigator();

const NotificationStackScreen = ({ deleteJWT }) => {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen name="Notification" component={Notifications} options={{ headerShown: false }} />
        </NotificationStack.Navigator>
    )
}

export default NotificationStackScreen;