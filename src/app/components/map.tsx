'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  locations: { lat: number; lng: number }[];
}

const Map: React.FC<MapProps> = ({ locations }) => {
  const mapContainerStyle = {
    width: '50%',
    height: '600px',
  };

  const center = locations.length > 0 ? locations[0] : { lat: 0, lng: 0 }; //{"lat":37.75,"lng":-122.45};

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';//"AIzaSyBzGtmdqtzBCDLz12bYckmFuh1Ga03EYYQ";  /*  || ''; */

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13.5}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;