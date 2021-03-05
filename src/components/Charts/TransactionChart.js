import React, {useEffect,  useState} from 'react';
import {
    Bar,
    BarChart,
    Brush,
    CartesianGrid,
    Cell,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import {GetBuyChartData, GetNetChartData, GetSellChartData, GetVolumeChartData} from "api/queries";
import moment from "moment";
import {infoColor} from "../../assets/jss/material-dashboard-react";
import {useFetchChartData} from "../../store/hooks/vault/useFetchChartData";

export const TransactionChart = ({time, type}) => {
    const [pair, setPair] = useState('0x2366eC9dDD1eB27506Fa2Ed48Da8f2D9e99ed3c7')
    const [token, setToken] = useState('0x4197c6ef3879a08cd51e5560da5064b773aa1d29')
    const {fetchChartData,chartData} = useFetchChartData();
    const [colors,setColors] = useState([]);
    const [startIndex,setStartIndex] = useState(0)

    useEffect(() =>{
        const temp = []
        chartData.map((entry) => {
            const color = entry.value > 0 ? COLORS[0] : COLORS[1];
            temp.push(color)
        })
        setColors(temp)
    },[chartData])

    useEffect(() => {
        let min = 0;
        let max = 10000000000000;

        if (time === "hour") {
            max = moment().unix();
            min = moment().subtract(1, 'weeks').unix();
            console.log(max, min)
        }

        if (time === "minute") {
            max = moment().unix();
            min = moment().subtract(2, 'days').unix();
            console.log(max, min)
        }
        console.log(process.env.REACT_APP_API_HOST);
        fetchChartData({time, pair, token, type, min, max})
    }, [time, pair, token, type]);

    function formatXAxis(tickItem) {
        return moment(tickItem).format('MMM Do YY')
    }


    const COLORS = ['#00CA4E', '#FF605C'];

    console.log(chartData)
    return (
        <>
            {
                chartData.length !== 0 &&
                <ResponsiveContainer width="100%"
                                     height={500}>
                    <BarChart
                        width="100%"
                        height={500}
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="datetime" tickFormatter={formatXAxis}/>
                        <YAxis/>
                        <Tooltip/>
                        <ReferenceLine y={0}/>
                        <Brush dataKey="datetime" height={50} stroke={infoColor[0]} tickFormatter={formatXAxis} onChange={(e) => setStartIndex(e.startIndex)}/>
                        <Bar dataKey="value" >
                            {
                                chartData.map((_, index) => {
                                    return <Cell fill={colors[(index+startIndex)]} key={`cell-${index}`}/>;
                                })
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            }
        </>
    );


}
