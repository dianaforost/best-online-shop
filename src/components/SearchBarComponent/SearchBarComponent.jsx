import React, { useRef, useState } from 'react';
import {
  Container,
  SearchButton,
  SearchContainer,
  SearchInput,
  Wrapper,
} from './SearchBarComponent.styled';
import { Icon } from 'components/Icon/Icon';
import { useClickAway, useKeyPressEvent } from 'react-use';

export const SearchBarComponent = ({ setIsActive }) => {
  const [inputField, setInputField] = useState('');
  const searchRef = useRef(null);

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  useClickAway(searchRef, handleCloseMenu);

  useKeyPressEvent('Escape', handleCloseMenu, handleCloseMenu);

  const handleInput = e => {
    setInputField(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <SearchContainer ref={searchRef}>
          <SearchButton>
            <Icon id={'search'} width={'24px'} height={'24px'} />
          </SearchButton>
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
};
