import React, { useState } from 'react';
import AddCityModal from './AddCityModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoriteCities = ({ currentCity, onClick }) => {
    const [cities, setCities] = useState(
        JSON.parse(localStorage.getItem('favoriteCities')) || []
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCity, setNewCity] = useState('');
    const [isValidCity, setIsValidCity] = useState(false);

    const addCity = async () => {
        if (!newCity) return; 

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${import.meta.env.VITE_API_KEY}`
            );
            if (!response.ok) {
                throw new Error('Invalid city');
            }
            const data = await response.json();
            setIsValidCity(true);
            if (!cities.includes(newCity)) {
                const updatedCities = [...cities, newCity];
                setCities(updatedCities);
                setNewCity('');
                localStorage.setItem('favoriteCities', JSON.stringify(updatedCities));
                setIsModalOpen(false); 
            } else {
                toast.error('City is already added to the favorites.');
            }
        } catch (error) {
            setIsValidCity(false);
            toast.error('Invalid city. Please enter a valid city name.');
        }
    };

    const removeCity = (city) => {
        const updatedCities = cities.filter((c) => c !== city);
        setCities(updatedCities);
        localStorage.setItem('favoriteCities', JSON.stringify(updatedCities));
    };

    return (
        <div>
            <h2 className="text-xl font-semibold text-white mb-4">Favorite Cities</h2>
            <div className="mt-6 p-4 rounded-lg shadow-md">
                <div className="grid grid-cols-4 gap-4 overflow-x-auto">
                    <div
                        className="bg-special-gray text-white rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <div className="text-2xl">+</div>
                        <div className="text-md mt-2">World forecast</div>
                        <div className="text-sm">Add the cities you are interested in</div>
                    </div>
                    {cities.map((city) => (
                        <div
                            key={city}
                            className="bg-special-gray text-white rounded-lg p-4 flex flex-col items-center justify-center relative cursor-pointer"
                            onClick={() => onClick(city)} 
                        >
                            <div className="text-lg">{city}</div>
                            <button
                                onClick={() => removeCity(city)}
                                className="absolute top-2 right-2 px-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>

                {isModalOpen && (
                    <AddCityModal
                        newCity={newCity}
                        setNewCity={setNewCity}
                        addCity={addCity}
                        isValidCity={isValidCity}
                        closeModal={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default FavoriteCities;
