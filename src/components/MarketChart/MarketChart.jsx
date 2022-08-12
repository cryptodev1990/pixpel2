import React, {useRef, useEffect, useState} from "react";
import {Chart as ChartJS} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

const RGB_COLOR_GROWTH = "46, 189, 133",
        RGB_COLOR_FALL = "189, 46, 46"
const getDataChart = (ctx, isGrowth = true, data) => {
    const setColor = (opacity = 1) => isGrowth === true ? `rgba(${RGB_COLOR_GROWTH}, ${opacity})` : `rgba(${RGB_COLOR_FALL}, ${opacity})`
    const gradient = ctx.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, setColor());
    gradient.addColorStop(1, setColor(0));

    return {
        labels: ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
        datasets: [
            {
                backgroundColor : gradient, // Put the gradient here as a fill color
                tension: 0.4,
                fill: true,
                borderColor : setColor(),
                borderWidth: 2,
                pointColor : "#fff",
                pointStrokeColor : setColor(),
                pointHighlightFill: "#fff",
                pointHighlightStroke: setColor(),
                data : data
            }
        ]
    }
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    elements: {
        point: {
            radius: 0
        }
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        }
    }
};
const MarketChart = (props) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const chartRef = useRef(null);
    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }

        setChartData(getDataChart(chart.ctx, props.isGrowth, props.data))
    }, [])


    return (<div style={props.sizeChart}>
        <Line
            ref={chartRef}
            data={chartData}
            options={options}
        />
    </div>)
}
export default MarketChart