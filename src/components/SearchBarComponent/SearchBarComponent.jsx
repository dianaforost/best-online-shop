import React, { useState } from 'react';
import { SearchInput, SearchLabel } from './SearchBarComponent.styled';

export const SearchBarComponent = () => {
  const [inputField, setInputField] = useState('');

  const handleInput = e => {
    console.log(e);
    setInputField(e.target.value);
  };
  return (
    <SearchLabel>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={inputField}
        onChange={handleInput}
      />
    </SearchLabel>
  );
};
