import React from "react";
import { View } from 'react-native';
import style from './style';

const Card = (props) => {
    return (
        <View style={style.card}>
            <View style={style.cardContent}>
                {props.children}
            </View>
        </View>
    );
}
 
export default Card;