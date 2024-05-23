import { useState } from 'react';
import Header from './Header';
import './index.css';
import Dashboard from './Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
    const [city, setCity] = useState('Pune'); 

    const handleSearch = (searchText) => {
        setCity(searchText);
    };

    return (
        <div className="bg-special-black min-h-screen">
        <ToastContainer />
            <Header onSearch={handleSearch} />
            <Dashboard city={city} onClick={handleSearch}/>
        </div>
    );
}

export default App;
