import cloudIcon from './assets/weather_icons/04d.png'; 
import windIcon from './assets/weather_icons/direction.png';

const TodayAt = () => {
    const hourlyData = [
        { time: '2:30 PM', temp: '39.02°', icon: cloudIcon, wind: '11Km/h', windIcon: windIcon },
        { time: '5:30 PM', temp: '40.66°', icon: cloudIcon, wind: '16Km/h', windIcon: windIcon },
        { time: '8:30 PM', temp: '40.54°', icon: cloudIcon, wind: '11Km/h', windIcon: windIcon },
        { time: '11:30 PM', temp: '38.97°', icon: cloudIcon, wind: '12Km/h', windIcon: windIcon },
        { time: '2:30 AM', temp: '35.64°', icon: cloudIcon, wind: '11Km/h', windIcon: windIcon },
        { time: '5:30 AM', temp: '34.06°', icon: cloudIcon, wind: '14Km/h', windIcon: windIcon },
        { time: '8:30 AM', temp: '37.02°', icon: cloudIcon, wind: '18Km/h', windIcon: windIcon },
        { time: '11:30 AM', temp: '43.07°', icon: cloudIcon, wind: '12Km/h', windIcon: windIcon },
    ];

    return (
        <div>
            <div className="text-lg mb-4 text-white">Today at</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 shadow-lg mb-4">
                {hourlyData.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center text-special-white bg-special-gray p-4 h-36 rounded-lg">
                        <div>{hour.time}</div>
                        <img src={hour.icon} alt="weather" className="w-12 h-12 my-2" />
                        <div className="text-lg">{hour.temp}</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 shadow-lg mb-4">
                {hourlyData.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center text-special-white bg-special-gray p-4 h-36 rounded-lg">
                        <div>{hour.time}</div>
                        <img src={hour.windIcon} alt="weather" className="w-12 h-12 my-2" />
                        <div className="text-lg">{hour.wind}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodayAt;
