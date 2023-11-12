'use client'
// Import the 'useEffect' and 'useState' hooks from React
import React, { useState, useEffect } from 'react';
import Map from '../components/map';
import SearchBar from '../components/SearchBar';
import { handleSearch } from '../utils/geocodingUtils';

const YourPage: React.FC = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch data from the 'parseData' API
        const fetchData = async () => {
            try {
                const response = await fetch('/api/parseData');
                const data = await response.json();
                setLocations(data.parsedData);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount in class components

    const [selectedLocation, setSelectedLocation] = useState(locations[0]?.coords);
    const [mapZoom, setMapZoom] = useState(13);

    const handleLocationClick = (coords: { lat: number; lng: number }) => {
        setSelectedLocation(coords);
        setMapZoom(15);
    };

    const handleSearchWrapper = async (address: string) => {
        await handleSearch(address, setSelectedLocation, setMapZoom);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '20px' }}>
                <h1>Your Page Title</h1>
                <SearchBar onSearch={handleSearchWrapper} />
                <ul>
                    {locations.map((location, index) => (
                        <li key={index} onClick={() => handleLocationClick(location.coords)}>
                            {location.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 2, position: 'relative' }}>
                <Map locations={locations.map(location => location.coords)} center={selectedLocation} zoom={mapZoom} />
            </div>
        </div>
    );
};

export default YourPage;
