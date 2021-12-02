import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './style';
import NotificationList from './NotificationList/NotificationList';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        { title: "You have paid to John", key: 1 },
        { title: "You have paid to Mona", key: 2 },
        { title: "You have paid to August", key: 3 },
        { title: "You have paid to April", key: 4 },
        { title: "You have paid to Wane", key: 5 },
        { title: "You have paid to Louis", key: 6 },
        { title: "You have paid to Katy", key: 7 },
        { title: "You have paid to Kurl", key: 8 },
        { title: "You have paid to Vanice", key: 9 },
        { title: "You have paid to Keil", key: 10 },
        { title: "You have paid to Dido", key: 11 },
        { title: "You have paid to Emma", key: 12 },
        { title: "You have paid to Lesly", key: 13 },
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

export default Notifications;