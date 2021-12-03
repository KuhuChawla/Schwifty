import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

const Charts = () => {
    let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

    return (
        <View>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                100, 110, 90, 130, 80, 103
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width}
                height={250}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                withHorizontalLabels={false}
                chartConfig={{
                    backgroundGradientFrom: "#fff",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#fff",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(42, 43, 77, ${opacity})`,
                    strokeWidth: 2, // optional, default 3
                    barPercentage: 100,
                    useShadowColorFromDataset: false, // optional


                    labelColor: (opacity = 1) => `rgba(42, 43, 77, ${opacity})`,
                    style: {
                        borderRadius: 0
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "0",
                        stroke: "#2a2b4d"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 6
                }}

                decorator={() => {
                    return tooltipPos.visible ? <View>
                        <Svg>
                            <Rect x={tooltipPos.x - 15}
                                y={tooltipPos.y + 10}
                                width="40"
                                height="30"
                                fill="black" />
                            <TextSVG
                                x={tooltipPos.x + 5}
                                y={tooltipPos.y + 30}
                                fill="white"
                                fontSize="16"
                                fontWeight="bold"
                                textAnchor="middle">
                                {tooltipPos.value}
                            </TextSVG>
                        </Svg>
                    </View> : null
                }}

                onDataPointClick={(data) => {

                    let isSamePoint = (tooltipPos.x === data.x
                        && tooltipPos.y === data.y)

                    isSamePoint ? setTooltipPos((previousState) => {
                        return {
                            ...previousState,
                            value: data.value,
                            visible: !previousState.visible
                        }
                    })
                        :
                        setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });

                }}
            />
        </View>
    )
}

export default Charts;