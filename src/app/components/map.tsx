"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  //locations: { lat: number; lng: number }[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ locations, center, zoom }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '600px',
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center || locations[0]} zoom={zoom || 13}>
        {locations.map((location, index) => {
          console.log(typeof(location.latitude))
          return <Marker key={index} position={{ coords: { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) } }} />
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
