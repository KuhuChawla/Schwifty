import React from "react";
import { View, Text, TouchableOpacity, TouchableNativeFeedbackBase } from "react-native";
import Card from "../../home/Card/Card";
import styles from "./style";
// import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const NotificationList = ({notification, deleteNotification}) => {
    // const notification = props.notification;
    // console.log(notification);
    // const handleClose = (id) => {
    //     console.log(id);
    // }

    return (
        <View>
            <Card>
                <View style={styles.notificationListBox}>
                    <Text style={styles.notificationListTitle}> {notification.title} </Text>
                    <TouchableOpacity onPress={() => {deleteNotification(notification.key)}}>
                        <AntDesign name="closecircleo" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
}

export default NotificationList;