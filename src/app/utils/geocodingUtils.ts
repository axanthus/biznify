"use client"

export const handleSearch = async (
    address: string,
    setSelectedLocation: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>,
    setMapZoom: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    console.log(address);
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsApiKey}`
      );
      const data = await response.json();
      console.log(data);
  
      if (data.status === 'OK' && data.results.length > 0) {
        const { location } = data.results[0].geometry;
        setSelectedLocation({ lat: location.lat, lng: location.lng });
        setMapZoom(15);
        return data.results[0].formatted_address.slice(-10, -5)
      } else {
        console.error('Unable to find coordinates for the given address.');
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
    }
  };
  