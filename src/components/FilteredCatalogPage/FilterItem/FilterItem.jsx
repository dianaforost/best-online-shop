import { Icon } from 'components/Icon/Icon';
import {
  ButtonList,
  CategoriesList,
  FilterItemSquare,
  HiddenCheckbox,
  Item,
  List,
  ListItem,
} from './FilterItem.styled';
import { useState } from 'react';

export const FilterItem = ({
  label,
  items,
  isShown,
  toggleSearch,
  initialChecked,
  type,
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
    <List $type={type}>
      <ButtonList onClick={toggleSearch} $type={type}>
        {label}
        {!isShown ? (
          <Icon id={'angle-down'} width={24} height={24} />
        ) : (
          <Icon id={'angle-up'} width={24} height={24} />
        )}
      </ButtonList>
      <CategoriesList $isVisible={isShown}>
        {items.map((item, index) => (
          <ListItem $type={type} key={index}>
            <Item $type={type}>{item}</Item>
            <div style={{ position: 'relative' }}>
              <HiddenCheckbox
                name={item}
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index, item)}
              />
              <FilterItemSquare $type={type}>
                <Icon
                  id={'check'}
                  width={24}
                  height={24}
                  style={{ display: checkedItems[index] ? 'block' : 'none' }}
                />
              </FilterItemSquare>
            </div>
          </ListItem>
        ))}
      </CategoriesList>
    </List>
  );
};
