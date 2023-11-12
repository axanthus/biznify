"use client"
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (address: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [address, setAddress] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleSearch = () => {
    onSearch(address);
  };

  return (
    <div className="w-full relative">
      <input className="text-black" type="text" value={address} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;