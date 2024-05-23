import { useState } from 'react';
import logo from './assets/logo.png';
import search from './assets/search.svg';
import location from './assets/location.svg';

const Header = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        handleSearch();
    };

    return (
        <header className="bg-special-black">
            <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center">
                <img className="h-12 mb-4 sm:mb-0" src={logo} alt="Logo" />
                <form onSubmit={handleSubmit} className="relative lg:ml-96 md:ml-36 flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <input
                        type="text"
                        placeholder="Search City..."
                        value={searchText}
                        onChange={handleChange}
                        className="w-full sm:w-auto px-10 py-2 rounded-lg bg-special-gray text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                    <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent">
                        <img src={search} className="h-5 w-5 text-gray-400" alt="Search Icon" />
                    </button>
                </form>

            </div>
        </header>
    );
};

export default Header;
