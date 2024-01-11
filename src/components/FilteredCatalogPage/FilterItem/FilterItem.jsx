import { Icon } from 'components/Icon';
import {
  ButtonList,
  CategoriesList,
  FilterItemSquare,
} from './FilterItem.styled';

export const FilterItem = ({ label, items, isShown, toggleSearch }) => (
  <div>
    <ButtonList onClick={toggleSearch}>
      {label}
      {!isShown ? (
        <Icon id={'angle-down'} width={24} height={24} />
      ) : (
        <Icon id={'angle-up'} width={24} height={24} />
      )}
    </ButtonList>
    <CategoriesList $isVisible={isShown}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p>{item}</p>
          <FilterItemSquare />
        </li>
      ))}
    </CategoriesList>
  </div>
);
