import React, { useState } from 'react';
import {
  Container,
  SearchInput,
  SearchLabel,
} from './SearchBarComponent.styled';

export const SearchBarComponent = () => {
  const [inputField, setInputField] = useState('');

  const handleInput = e => {
    console.log(e);
    setInputField(e.target.value);
  };
  return (
    <Container>
      <SearchLabel>
        <SearchInput
          type="text"
          name="search"
          placeholder="Пошук"
          value={inputField}
          onChange={handleInput}
        />
      </SearchLabel>
    </Container>
  );
};
