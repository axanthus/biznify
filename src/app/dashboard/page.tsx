//'use client'
import React from 'react';
import Map from '../components/map';

const YourPage: React.FC = () => {
  const locations = [
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

  return (
    <div>
      <h1>Your Page Title</h1>
      <Map locations={locations.map(location => location.coords)} />
    </div>
  );
};

export default YourPage;
