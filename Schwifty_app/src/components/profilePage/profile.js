import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import ProfileCard from "./profileCard";
import styles from "./style";
import Loading from "../common/loading";

const icon_size = 120;
const Profile = ({ deleteJWT, jwt }) => {
	const deviceWidth = Math.round(Dimensions.get('window').width);
	const [isLoading, setIsLoading] = useState(true);
	const [isEdit, setIsEdit] = useState(false);
	const [data, setData] = useState(null);
	const [name, setName] = useState(null);
	const [address, setAddress] = useState(null);

	const getData = async () => {
		try {
			const response = await axios.get("http://10.0.2.2:5000/user/" + jwt.email);
			setData(response.data);
			setName(String(response.data.name));
			setAddress(String(response.data.address));
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	const editProfile = () => {
		axios.post("http://10.0.2.2:5000/userUpdate/" + jwt.email, {
			name: name,
			address: address
		}).then((response) => {
			console.log("resp",response);
			if (response.status === 200) {
				setIsEdit(false);
				// getData();
			}
		}).catch((error) => {
			console.log("err",error);
		})
	}

	useEffect(() => {
		getData();
	}, [])

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		}}>{
				isLoading ? <Loading /> : <>
					<Image source={require('../../../assets/Profile.png')}
						style={{ width: icon_size, height: icon_size, borderRadius: icon_size }} />
					<Text style={{ paddingTop: 20, paddingBottom: 20, color: '#2a2b4d', fontSize: 20 }} >{data.email}</Text>
					<ProfileCard >
						<TextInput style={{ color: '#fff', fontSize: 16 }} value={name} editable={isEdit} onChange={(name) => setName(name)} />
					</ProfileCard>
					<ProfileCard >
						<Text style={{ color: '#fff', fontSize: 16 }}>{data.phone}</Text>
					</ProfileCard>
					<ProfileCard >
						<TextInput style={{ color: '#fff', fontSize: 16 }} value={address} editable={isEdit} onChange={(address) => setAddress(address)} />
					</ProfileCard>
					{isEdit ? <View style={styles.buttonRow}>
						<TouchableHighlight onPress={() => console.log(name, address)}>
							<View style={styles.button2}>
								<Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginHorizontal: 18, marginVertical: 10 }}>Save</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => {
							setIsEdit(false)
							setAddress(data.address)
							setName(data.name)
						}}>
							<View style={styles.button2}>
								<Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginHorizontal: 18, marginVertical: 10 }}>Cancel</Text>
							</View>
						</TouchableHighlight>
					</View> : <TouchableHighlight onPress={() => {
						setIsEdit(true)
					}}>
						<View style={styles.button}>
							<Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginHorizontal: 18, marginVertical: 10 }}>Edit Details</Text>
						</View>
					</TouchableHighlight>}
					<TouchableHighlight onPress={() => deleteJWT()}>
						<View style={styles.button}>
							<Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginHorizontal: 18, marginVertical: 10 }}>Log Out</Text>
						</View>
					</TouchableHighlight>
				</>
			}

		</View>
	);
}
export default Profile;