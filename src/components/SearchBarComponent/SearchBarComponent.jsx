import React, { useState } from 'react';
import {
  Container,
  SearchButton,
  SearchContainer,
  SearchInput,
} from './SearchBarComponent.styled';

export const SearchBarComponent = ({ data }) => {
  const [inputField, setInputField] = useState('');

  const handleInput = e => {
    setInputField(e.target.value);
  };
  return (
    <Container>
      <SearchContainer>
        <SearchButton>{data}</SearchButton>
        <SearchInput
          type="text"
          name="search"
          placeholder="Пошук"
          value={inputField}
          autocomplete="off"
          onChange={handleInput}
        />
      </SearchContainer>
    </Container>
  );
};
