'use client'
import { useState, useEffect } from 'react';
import { handleSearch } from './utils/geocodingUtils';

export default function useSearchandMap() {
  const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch JSON data
        fetch('/sampleLocations.json') // Replace with the correct path
            .then(response => response.json())
            .then(data => setLocations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    //const [locations, setLocations] = useState(initialLocations);
    const [selectedLocation, setSelectedLocation] = useState(locations[0]?.coords);
    const [mapZoom, setMapZoom] = useState(13); //Default zoom

    const handleLocationClick = (coords: { lat: number; lng: number }) => {
    setSelectedLocation(coords);
    setMapZoom(15); //zoom in on specific location when clicked
    };

    const handleSearchWrapper = async (address: string) => {
        await handleSearch(address, setSelectedLocation, setMapZoom);
    };
  
  return { selectedLocation, mapZoom, locations, handleLocationClick, handleSearchWrapper}
}