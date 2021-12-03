import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import ProfileCard from "./profileCard";
import styles from "./style";

const icon_size = 120;
const Profile = ({deleteJWT}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#2a2b4d',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={require('./icon.png')}
                style={{ width: icon_size, height: icon_size, borderRadius: icon_size }} />
            <Text style={{ paddingTop: 20, paddingBottom: 20, color: '#fff', fontSize: 20 }} >Email Id</Text>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 20 }}>First Name</Text>
            </ProfileCard>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 20 }}>Last Name</Text>
            </ProfileCard>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 20 }}>Mobile Number</Text>
            </ProfileCard>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 20 }}>Address</Text>
            </ProfileCard>
            <TouchableHighlight onPress={() => deleteJWT()}>
                <ProfileCard >
                    <Text style={{ color: '#ff0000', fontSize: 20, textAlign: 'center' }}>Log Out</Text>
                </ProfileCard>
            </TouchableHighlight>
        </View>
    );
};

export default Profile