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
import { useEffect, useState } from 'react';

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
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    console.log(activeFilters);
    // Здесь вызывайте функцию для передачи activeFilters в бэкенд
  }, [activeFilters]);

  const handleCheckboxChange = (index, item) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    if (newCheckedItems[index]) {
      // Если чекбокс стал активным, добавляем фильтр в массив активных фильтров
      setActiveFilters(prevFilters => [...prevFilters, item]);
    } else {
      // Если чекбокс стал неактивным, удаляем фильтр из массива активных фильтров
      setActiveFilters(prevFilters =>
        prevFilters.filter(filterItem => filterItem !== item)
      );
    }
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
