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

export const TransactionChart = ({time, type}) => {
    const [pair, setPair] = useState('0x2366eC9dDD1eB27506Fa2Ed48Da8f2D9e99ed3c7')
    const [token, setToken] = useState('0x4197c6ef3879a08cd51e5560da5064b773aa1d29')

    const [chartData, setChartData] = useState([]);
    const [colors,setColors] = useState([]);
    const [startIndex,setStartIndex] = useState(0)

    const getData = (time, pair, token, type, min, max) => {
        let a = []
        switch (type) {
            case 'net':
                GetNetChartData(time, pair, token, min, max).then(r => {
                    setChartData(r.reverse())
                    getColors(r.reverse())
                });
                break;
            case 'volume':
                GetVolumeChartData(time, pair, token, min, max).then(r => {
                    setChartData(r.reverse())
                    getColors(r.reverse())
                });
                break;
            case 'buy':
                GetBuyChartData(time, pair, token, min, max).then(r => {
                    setChartData(r.reverse())
                    getColors(r.reverse())
                });
                break;
            case 'sell':
                GetSellChartData(time, pair, token, min, max).then(r => {
                    setChartData(r.reverse())
                    getColors(r.reverse())
                });
                break;
        }

    }

    const getColors = (r) => {
        const temp = []
        r.map((entry) => {
            const color = entry.value > 0 ? COLORS[0] : COLORS[1];
            temp.push(color)
        })
        setColors(temp)
    }

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

        getData(time, pair, token, type, min, max)
    }, [time, pair, token, type])

    function formatXAxis(tickItem) {
        return moment(tickItem).format('MMM Do YY')
    }


    const COLORS = ['#00CA4E', '#FF605C'];
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
                        <Brush dataKey="datetime" height={50} stroke="#ffa500" tickFormatter={formatXAxis} onChange={(e) => setStartIndex(e.startIndex)}/>
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
