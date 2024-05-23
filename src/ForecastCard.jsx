import cloudIcon from './assets/weather_icons/04d.png';

const ForecastCard = () => {
    const forecastData = [
        { day: 'Sat', date: '24 May', temp: '43°', icon: cloudIcon },
        { day: 'Sun', date: '25 May', temp: '46°', icon: cloudIcon },
        { day: 'Mon', date: '26 May', temp: '45°', icon: cloudIcon },
        { day: 'Tue', date: '27 May', temp: '42°', icon: cloudIcon },
        { day: 'Wed', date: '28 May', temp: '43°', icon: cloudIcon },
    ];

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
