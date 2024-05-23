import { useState, useEffect } from 'react';
import icon_01d from './assets/weather_icons/icon_01d.png';
import icon_01n from './assets/weather_icons/icon_01n.png';
import icon_02d from './assets/weather_icons/icon_02d.png';
import icon_02n from './assets/weather_icons/icon_02n.png';
import icon_03d from './assets/weather_icons/icon_03d.png';
import icon_03n from './assets/weather_icons/icon_03n.png';
import icon_04d from './assets/weather_icons/icon_04d.png';
import icon_04n from './assets/weather_icons/icon_04n.png';
import icon_09d from './assets/weather_icons/icon_09d.png';
import icon_09n from './assets/weather_icons/icon_09n.png';
import icon_10d from './assets/weather_icons/icon_10d.png';
import icon_10n from './assets/weather_icons/icon_10n.png';
import icon_11d from './assets/weather_icons/icon_11d.png';
import icon_11n from './assets/weather_icons/icon_11n.png';
import icon_13d from './assets/weather_icons/icon_13d.png';
import icon_13n from './assets/weather_icons/icon_13n.png';
import icon_50d from './assets/weather_icons/icon_50d.png';
import icon_50n from './assets/weather_icons/icon_50n.png';

const ForecastCard = ({ city }) => {
    const [forecastData, setForecastData] = useState(null);
    const iconMap = {
        '01d': icon_01d,
        '01n': icon_01n,
        '02d': icon_02d,
        '02n': icon_02n,
        '03d': icon_03d,
        '03n': icon_03n,
        '04d': icon_04d,
        '04n': icon_04n,
        '09d': icon_09d,
        '09n': icon_09n,
        '10d': icon_10d,
        '10n': icon_10n,
        '11d': icon_11d,
        '11n': icon_11n,
        '13d': icon_13d,
        '13n': icon_13n,
        '50d': icon_50d,
        '50n': icon_50n,
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_FORECAST_API}${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                const processedData = data.list.filter(item => item.dt_txt.includes('18:00:00')).map(item => ({
                    day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                    date: new Date(item.dt * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
                    temp: `${Math.round(item.main.temp)}°C`,
                    icon: iconMap[item.weather[0].icon] 
                }));
                setForecastData(processedData);
                console.log('Weather data:', data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching weather data:', error);
            });
    }, [city]);

    if (!forecastData) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <div className="text-2xl pl-2 mt-2 mb-4 text-white">5 Days Forecast</div>
            <div className="bg-special-gray text-white rounded-3xl p-6 shadow-lg w-full sm:w-78 mt-4">
                {forecastData.map((day, index) => (
                    <div key={index} className="text-xl flex items-center justify-between mb-3 h-12">
                        <img src={day.icon} alt="weather" className="w-10 h-10" />
                        <div className="text-white">{day.temp}</div>
                        <div className="text-text-gray">{day.date}</div>
                        <div className="text-text-gray">{day.day}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastCard;
