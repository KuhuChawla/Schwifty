import React from "react";
import { Text, View } from "react-native";
import Button from "../../../../components/common/button";
import NotificationContainer from "../../../../components/notificationContainer";


const Notifications = ({ navigator }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <NotificationContainer />
        </View>
    )
}

export default Notifications;