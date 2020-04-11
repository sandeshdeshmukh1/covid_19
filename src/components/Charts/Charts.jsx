import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api/index';
import { Line } from 'react-chartjs-2';

const Charts = (props) => {
    const [dailyData, setdailyData] = useState([]);

    useEffect(async () => {
        const fetchAPI = async () => {
            setdailyData(await fetchChartData());
        }
        console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = (

        dailyData.length ?
            (<Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'infected',
                    borderColor: '#00f',
                    fill: false,
                }],
            }}>

            </Line >) : null

    );
    const lineChart2 = (

        dailyData.length ?
            (<Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'deaths',
                    borderColor: '#f00',
                    fill: false,
                }],
            }}>

            </Line >) : null

    );
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-md-6">
                    {lineChart}
                </div>
                <div className="col-md-6">
                    {lineChart2}
                </div>

            </div>

        </div>
    );
}

export default Charts;