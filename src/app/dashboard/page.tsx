'use client'
import React, { useState } from 'react';
import Map from '../components/map';

const YourPage: React.FC = () => {
  const initialLocations = [
    {
      title: "75 Spear St",
      address1: "75 Spear St",
      address2: "San Francisco, CA 94105, USA",
      coords: { lat: 37.79273456511728, lng: -122.3940051607132 },
      placeId: "ChIJV6BUEWSAhYAR5Wy7l6jxfN4",
    },
    {
      title: "44 2nd St",
      address1: "44 2nd St",
      address2: "San Francisco, CA 94105, USA",
      coords: { lat: 37.788599172528805, lng: -122.40071294536895 },
      placeId: "ChIJt8SJmGKAhYARrLpvxawQyqs",
    },
    {
      title: "2060 Fillmore St",
      address1: "2060 Fillmore St",
      address2: "San Francisco, CA 94115, USA",
      coords: { lat: 37.78885222981391, lng: -122.4336785509262 },
      placeId: "ChIJqfjKtseAhYARcij-Ox2I3os",
    },
  ];
  const [locations, setLocations] = useState(initialLocations);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]?.coords);
  const [mapZoom, setMapZoom] = useState(13); //Default zoom

  const handleLocationClick = (coords: { lat: number; lng: number }) => {
    setSelectedLocation(coords);
    setMapZoom(15); //zoom in on specific location when clicked
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Your Page Title</h1>
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
