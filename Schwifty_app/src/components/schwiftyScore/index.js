import React, { Component } from "react";
import { PieChart } from 'react-native-svg-charts';
import {
  Text,
  View,
  Dimensions
} from 'react-native';


class SchwiftyScorePage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    }
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['Loyalty Points','Time from Transactions', 'Payment Frequency', 'Schwifty Score'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
          onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
        }
      })
    const deviceWidth = Dimensions.get('window').width

    return (
      <View style={{ justifyContent: 'center', flex: 1 ,backgroundColor:'#fff'}}>
        <PieChart
          style={{ height: 380 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: 'absolute',
            color:'#2a2b4d',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14 
          }}>
          {`${label} \n ${value}`}
        </Text>
      </View>
    )
  }
}
  

export default SchwiftyScorePage;