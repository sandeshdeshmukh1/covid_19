import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}
const url_daily = 'https://covid19.mathdro.id/api/daily';
export const fetchChartData = async () => {
    try {
        const { data } = await axios.get(url_daily);
        const modifiedChartData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

        }));

        return modifiedChartData;
    } catch (error) {
        console.log(error);
    }
}

