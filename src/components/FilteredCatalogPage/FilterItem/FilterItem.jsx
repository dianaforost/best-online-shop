import { Icon } from 'components/Icon';
import {
  ButtonList,
  CategoriesList,
  FilterItemSquare,
  HiddenCheckbox,
} from './FilterItem.styled';
import { useState } from 'react';

export const FilterItem = ({
  label,
  items,
  isShown,
  toggleSearch,
  initialChecked,
}) => {
  const [checkedItems, setCheckedItems] = useState(
    initialChecked.map(() => false)
  );
  const handleCheckboxChange = (index, item) => {
    console.log(item);
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
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
            <div style={{ position: 'relative' }}>
              <HiddenCheckbox
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index, item)}
              />
              <FilterItemSquare checked={checkedItems[index]} />
            </div>
          </li>
        ))}
      </CategoriesList>
    </div>
  );
};
