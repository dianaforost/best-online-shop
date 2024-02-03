import React, { useState } from 'react';
import { SearchInput } from './SearchBarComponent.styled';

export const SearchBarComponent = () => {
  const [inputField, setInputField] = useState('');
  const handleInput = e => {
    console.log(inputField);
    setInputField(e.target.value);
  };
  return (
    <label>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={inputField}
        onChange={handleInput}
      />
    </label>
  );
};
