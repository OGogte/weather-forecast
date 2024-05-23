import Card from './Card';
import FavoriteCities from './FavoriteCities';
import ForecastCard from './ForecastCard';
import Highlights from './Highlights';

const Dashboard = ({ city, onClick }) => {
    return (
        <div className=" bg-special-black p-8 container mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-start md:flex-row md:justify-start">

                <div className="flex flex-col space-y-4 mr-8 lg:w-1/5 md:w-1/3">
                    <Card city ={ city }/>
                    <ForecastCard city ={ city }/>
                </div>


                <div className="flex flex-col space-y-4 lg:w-4/5 md:w-2/3">
                    <Highlights city ={ city }/>
                    <FavoriteCities currentCity ={ city } onClick={onClick}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;