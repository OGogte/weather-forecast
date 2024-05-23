import {  useEffect, useState } from 'react';
import calendar from './assets/calendar.svg';
import location from './assets/locationOn.svg';
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
import { getDate} from './dateUtils'; 

const Card = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                console.log('Weather data:', data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, [city]);
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

    if (!weatherData) {
        return <div>Loading...</div>;
    }
    
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon; 
    const iconUrl = iconMap[iconCode];
    const cityDate = getDate(weatherData.dt, weatherData.timezone); 

    return (
        <div className="bg-special-gray text-white rounded-3xl p-6 shadow-lg w-full sm:w-78 mt-4 ">
            <div className="text-lg mb-3">Now</div>
            <div className="flex justify-between items-center mb-5">
                <div className="text-5xl">{weatherData.main.temp}°C</div>
                <div>
                    <img src={iconUrl} alt="weather" className="w-14 h-14" />
                </div>
            </div>
            <div className="text-white mb-4 capitalize">{description}</div>
            <div className="text-lg border-t border-gray-600 pt-4">
                <div className="flex items-center mb-3 text-text-gray">
                    <div className="flex items-center">
                        <img src={calendar} className="pr-2" alt="" />
                        <span>{cityDate}</span>
                    </div>
                </div>
                <div className="flex items-center text-text-gray">
                    <div className="flex items-center">
                        <img src={location} className="pr-2" alt="" />
                        <span>{weatherData.name}, {weatherData.sys.country}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;
