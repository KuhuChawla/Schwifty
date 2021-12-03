import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import ProfileCard from "./profileCard";
import styles from "./style";

const icon_size = 120;
const Profile = ({deleteJWT}) => {
    const deviceWidth = Math.round(Dimensions.get('window').width);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={require('../../../assets/Profile.png')}
                    style = {{width:icon_size,height:icon_size}}/>
            <Text style={{ paddingTop: 20, paddingBottom: 20, color: '#2a2b4d', fontSize: 20 }} >Email Id</Text>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 16 }}>Name</Text>
            </ProfileCard>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 16 }}>Mobile Number</Text>
            </ProfileCard>
            <ProfileCard >
                <Text style={{ color: '#fff', fontSize: 16 }}>Address</Text>
            </ProfileCard>
            <TouchableHighlight onPress={() => deleteJWT()}>
                <View style={{
                    width: deviceWidth - 50,
                    height: 50,
                    borderRadius: 10,
                    elevation: 6,
                    backgroundColor: '#2a2b4d',
                    shadowOffset: { width: 4, height: 4 },
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    marginHorizontal: 4,
                    marginVertical: 10,
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginHorizontal: 18, marginVertical: 10}}>Log Out</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default Profile