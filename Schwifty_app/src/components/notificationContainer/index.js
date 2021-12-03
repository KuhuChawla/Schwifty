import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './style';
import NotificationList from './NotificationList/NotificationList';

const NotificationContainer = () => {
    const [notifications, setNotifications] = useState([
        { title: "You have paid to John", key: 1 },
        { title: "You have paid to John", key: 2 },
        { title: "You have paid to John", key: 3 },
        { title: "You have paid to John", key: 4 },
        { title: "You have paid to John", key: 5 },
        { title: "You have paid to John", key: 6 },
        { title: "You have paid to John", key: 7 },
        { title: "You have paid to John", key: 8 },
        { title: "You have paid to John", key: 9 },
        { title: "You have paid to John", key: 10 },
        { title: "You have paid to John", key: 11 },
        { title: "You have paid to John", key: 12 },
        { title: "You have paid to John", key: 13 },
        { title: "You have paid to Liugi", key: 14 },
    ]);

    const deleteNotification = (key) => {
        let updatedNotifications = notifications.filter(notification => {
            return notification.key !== key
        });
        setNotifications(updatedNotifications);
    }

    return (
        <View style={styles.container}>
            <View style={styles.navTopbar}>
                <Text style={styles.navTopbarContent}>Notifications</Text>
            </View>
            <FlatList
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.key}
                data={notifications}
                renderItem={({ item }) => (
                    <NotificationList deleteNotification={deleteNotification} notification={item}/>
                )}
            />
        </View>
    );
}

export default NotificationContainer;