import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import ProfileCard from "./profileCard";
import styles from "./style";
import Loading from "../common/loading";

const icon_size = 120;
const Profile = ({ deleteJWT, jwt }) => {
	const deviceWidth = Math.round(Dimensions.get('window').width);
	const [isLoading, setIsLoading] = useState(true);
	const [isEdit, setIsEdit] = useState(false);
	const [data, setData] = useState(null);

	const getData = async () => {
		try {
			const response = await axios.get("http://10.0.2.2:5000/user/" + jwt.email);
			setData(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getData();
	}, [])

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#2a2b4d',
			alignItems: 'center',
			justifyContent: 'center',
		}}>{
				isLoading ? <Loading /> : <>
					<Image source={require('./icon.png')}
						style={{ width: icon_size, height: icon_size, borderRadius: icon_size }} />
					<Text style={{ paddingTop: 20, paddingBottom: 20, color: '#fff', fontSize: 20 }} >{data.email}</Text>
					<ProfileCard >
						<Text style={{ color: '#fff', fontSize: 16 }}>{data.name}</Text>
					</ProfileCard>
					<ProfileCard >
						<Text style={{ color: '#fff', fontSize: 16 }}>{data.phone}</Text>
					</ProfileCard>
					<ProfileCard >
						<Text style={{ color: '#fff', fontSize: 16 }}>{data.address}</Text>
					</ProfileCard>
					<ProfileCard >
						<Text style={{ color: '#fff', fontSize: 16 }}>Address</Text>
					</ProfileCard>
					<TouchableHighlight onPress={() => deleteJWT()}>
						<View style={styles.button}>
							<Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginHorizontal: 18, marginVertical: 10 }}>Log Out</Text>
						</View>
					</TouchableHighlight>
				</>
			}

		</View>
	);
};

export default Profile;