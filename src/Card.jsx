import weatherIcon from './assets/weather_icons/01d.png'; 
import calendar from './assets/calendar.svg';
import location from './assets/locationOn.svg';

const Card = () => {
    return (
        <div className="bg-special-gray text-white rounded-3xl p-6 shadow-lg w-full sm:w-78 mt-4 ">
            <div className="text-lg mb-3">Now</div>
            <div className="flex justify-between items-center mb-5">
                <div className="text-5xl">39°C</div>
                <div>
                    <img src={weatherIcon} alt="weather" className="w-14 h-14" />
                </div>
            </div>
            <div className="text-white mb-4">Haze</div>
            <div className="text-lg border-t border-gray-600 pt-4">
                <div className="flex items-center mb-3 text-text-gray">
                    <div className="flex items-center">
                        <img src={calendar} className="pr-2" alt="" />
                        <span>Friday 23 May</span>
                    </div>
                </div>
                <div className="flex items-center text-text-gray">
                    <div className="flex items-center">
                        <img src={location} className="pr-2" alt="" />
                        <span>Gurugram, IN</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
