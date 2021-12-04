import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../../components/home";
import Profile from "../../../components/profilePage/profile";
import SchwiftyScorePage from "../../../components/schwiftyScore";
import PaymentTransfer from "../../../components/paymentTransfer/PaymentTransfer";
import UserAcceptance from "../../../components/userAcceptance";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ deleteJWT, jwt, email, isMerchant }) => {
    console.log("HomeStackScreen", typeof(isMerchant));
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" options={{ headerShown: false }}>
                {() => <HomeScreen isMerchant={isMerchant}/>}
            </HomeStack.Screen>
            <HomeStack.Screen name="Profile" options={{
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTintColor: '#2a2b4d',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}>
                {() => <Profile deleteJWT={deleteJWT} jwt={jwt} email={email} isMerchant={isMerchant}/>}
            </HomeStack.Screen>
            <HomeStack.Screen name="Schwifty Score" options={{
                // headerStyle: {
                //     backgroundColor: '#2a2b4d',
                //     elevation: 0,
                //     shadowOpacity: 0
                // },
                headerTintColor: '#2a2b4d',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }} component={SchwiftyScorePage} />
            <HomeStack.Screen name="Add Payment" options={{
                // headerStyle: {
                //     backgroundColor: '#2a2b4d',
                //     elevation: 0,
                //     shadowOpacity: 0
                // },
                headerTintColor: '#2a2b4d',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}>
                {() => <PaymentTransfer jwt={jwt} email={email}/>}
            </HomeStack.Screen>
            <HomeStack.Screen name="User Acceptance" options={{
                // headerStyle: {
                //     backgroundColor: '#2a2b4d',
                //     elevation: 0,
                //     shadowOpacity: 0
                // },
                headerTintColor: '#2a2b4d',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}>
                {() => <UserAcceptance jwt={jwt} email={email}/>}
            </HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;