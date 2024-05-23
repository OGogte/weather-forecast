import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import air from './assets/air.svg';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import humidity from './assets/humidity.svg';
import waves from './assets/waves.svg';
import thermostat from './assets/thermostat.svg';
import visibility from './assets/visibility.svg';
import { getTime } from './dateUtils';

const Highlights = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);

    const [airQualityData, setAirQualityData] = useState(null);
    const [latLon, setLatLon] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                if (data.cod === '404') {
                    throw new Error('City not found');
                }
                setWeatherData(data);
                console.log('Weather data:', data);
            })
            .catch(error => {
                if (error.message === 'City not found') {
                    toast.error('City not found. Please check the spelling and try again.');
                } else {
                    toast.error('Failed to fetch weather data. Please try again later.');
                }
                console.error('Error fetching weather data:', error);
            });
    }, [city]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_GEO_API}${city}&appid=${import.meta.env.VITE_API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch geographical data');
                }
                return response.json();
            })
            .then(geoData => {
                const { lat, lon } = geoData[0];
                return fetch(`${import.meta.env.VITE_AQI_API}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch air quality data');
                }
                return response.json();
            })
            .then(aqiData => {
                setAirQualityData(aqiData);
                console.log('Air quality data:', aqiData);
            })
            .catch(error => {
                toast.error('Invalid City.');
                console.error('Error fetching air quality data:', error);
            });
    }, [city]);

    if (!weatherData || !airQualityData) {
        return <div>Loading...</div>; 
    }

    const timezoneOffset = weatherData.timezone;
    const sunriseTime = getTime(weatherData.sys.sunrise, timezoneOffset);
    const sunsetTime = getTime(weatherData.sys.sunset, timezoneOffset);

    return (
        <div className="bg-special-gray text-white rounded-3xl p-6 shadow-lg mt-4">
            <div className="text-lg mb-4">Today's Highlights</div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Air Quality Component */}
                <div className="bg-highlights-black text-text-gray p-4 rounded-3xl w-full lg:w-auto">
                    <div>Air Quality Index</div>
                    <div className="flex flex-wrap justify-between p-2">
                        <div className="flex flex-col mr-2"><img src={air} alt="" /></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">PM2.5 <span className="text-white text-2xl">{airQualityData && airQualityData.list[0].components.pm2_5}</span></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">SO2 <span className="text-white text-2xl">{airQualityData && airQualityData.list[0].components.so2}</span></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">NO2 <span className="text-white text-2xl">{airQualityData && airQualityData.list[0].components.no2}</span></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">O3 <span className="text-white text-2xl">{airQualityData && airQualityData.list[0].components.o3}</span></div>
                    </div>
                </div>

                {/* Sunrise & Sunset Component */}
                <div className="bg-highlights-black p-4 rounded-3xl">
                    <div>Sunrise & Sunset</div>
                    <div className="flex flex-wrap justify-between p-2">
                        <div className='flex'><img src={sun} className='mr-3 ' alt="" /><div className="flex flex-col mr-2">Sunrise: <span className="text-white">{weatherData && sunriseTime}</span></div></div>
                        <div className='flex mr-20'><img src={moon} className='mr-3 ' alt="" /><div className="flex flex-col mr-2">Sunset: <span className="text-white">{weatherData && sunsetTime}</span></div></div>
                    </div>
                </div>
            </div>

            {/* Additional Weather Highlights */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 mt-4">
                {/* Humidity Component */}
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Humidity</div>
                    <div className='flex justify-between mt-5'>
                        <img src={humidity} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>{weatherData && weatherData.main.humidity}%</div>
                    </div>
                </div>

                {/* Pressure Component */}
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Pressure</div>
                    <div className='flex justify-between mt-5'>
                        <img src={waves} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>{weatherData && weatherData.main.pressure} hPa</div>
                    </div>
                </div>

                {/* Visibility Component */}
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Visibility</div>
                    <div className='flex justify-between mt-5'>
                        <img src={visibility} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>{weatherData && weatherData.visibility / 1000} KM</div>
                    </div>
                </div>

                {/* Feels Like Component */}
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Feels Like</div>
                    <div className='flex justify-between mt-5'>
                        <img src={thermostat} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>{weatherData && weatherData.main.feels_like} °C</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;