import React, { useState, forwardRef } from 'react';
import {
  Container,
  SearchButton,
  SearchContainer,
  SearchInput,
  Wrapper,
} from './SearchBarComponent.styled';

export const SearchBarComponent = forwardRef(function (props, ref) {
  const [inputField, setInputField] = useState('');
  const { data } = props;

  const handleInput = e => {
    setInputField(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <SearchContainer ref={ref}>
          <SearchButton>{data}</SearchButton>
          <SearchInput
            type="text"
            name="search"
            placeholder="Пошук"
            value={inputField}
            autoComplete="off"
            onChange={handleInput}
          />
        </SearchContainer>
      </Container>
    </Wrapper>
  );
});
