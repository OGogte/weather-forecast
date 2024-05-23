import React from 'react';

const AddCityModal = ({ newCity, setNewCity, addCity, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Add a New City</h2>
                <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="Enter city name"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <div className="flex justify-end">
                    <button
                        onClick={closeModal}
                        className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={addCity}
                        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCityModal;
