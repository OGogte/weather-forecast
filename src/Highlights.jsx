import air from './assets/air.svg';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import humidity from './assets/humidity.svg';
import waves from './assets/waves.svg';
import visibility from './assets/visibility.svg';
import thermostat from './assets/thermostat.svg';

const Highlights = () => {
    return (
        <div className="bg-special-gray text-white rounded-3xl p-6 shadow-lg mt-4">
            <div className="text-lg mb-4">Today's Highlights</div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="bg-highlights-black text-text-gray p-4 rounded-3xl w-full lg:w-auto">
                    <div>Air Quality Index</div>
                    <div className="flex flex-wrap justify-between p-2">
                        <div className="flex flex-col mr-2"><img src={air} alt="" /></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">PM2.5 <span className="text-white text-2xl">61.3</span></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">SO2 <span className="text-white text-2xl">14.5</span></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">NO2 <span className="text-white text-2xl">5.66</span></div>
                        <div className="flex flex-col mr-2 text-sm text-center lg:text-left">O3 <span className="text-white text-2xl">215</span></div>
                    </div>
                </div>

                <div className="bg-highlights-black p-4 rounded-3xl">
                    <div>Sunrise & Sunset</div>
                    <div className="flex flex-wrap justify-between p-2">
                        <div className='flex'><img src={sun} className='mr-3 ' alt="" /><div className="flex flex-col mr-2">Sunrise: <span className="text-white">5:27 AM</span></div></div>
                        <div className='flex mr-20'><img src={moon} className='mr-3 ' alt="" /><div className="flex flex-col mr-2">Sunset: <span className="text-white">6:27 PM</span></div></div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 mt-4">
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Humidity</div>
                    <div className='flex justify-between mt-5'>
                        <img src={humidity} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>32%</div>
                    </div>
                </div>
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Pressure</div>
                    <div className='flex justify-between mt-5'>
                        <img src={waves} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>1003 hba</div>
                    </div>
                </div>
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Visibility</div>
                    <div className='flex justify-between mt-5'>
                        <img src={visibility} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>4 KM</div>
                    </div>
                </div>
                <div className="bg-highlights-black p-4 rounded">
                    <div className='text-sm text-text-gray'>Feels Like</div>
                    <div className='flex justify-between mt-5'>
                        <img src={thermostat} className='mr-3 ' alt="" />
                        <div className='text-white text-right text-3xl'>42°C</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;