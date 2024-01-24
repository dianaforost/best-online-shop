import { Icon } from 'components/Icon/Icon';
import {
  ButtonList,
  CategoriesList,
  FilterItemSquare,
  HiddenCheckbox,
  HiddenRadio,
  Item,
  List,
  ListItem,
} from './FilterItem.styled';
import { Fragment, useState } from 'react';

export const FilterItem = ({
  label,
  items,
  isShown,
  toggleSearch,
  initialChecked,
  type,
  onFilterChange,
  selectedColor,
  selectedSize,
}) => {
  const [checkedItems, setCheckedItems] = useState(
    initialChecked.map(() => false)
  );

  const handleCheckboxChange = (index, item) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    if (newCheckedItems[index]) {
      onFilterChange(item);
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
          <Fragment key={index}>
            {type ? (
              <ListItem
                $type={type}
                key={index}
                onClick={() => onFilterChange(type, item)}
              >
                <Item $type={type}>{item}</Item>
                <div style={{ position: 'relative' }}>
                  <HiddenRadio
                    type="radio"
                    name={`filterItemRadio_${type}`}
                    value={item}
                    checked={
                      selectedColor?.color === item ||
                      selectedSize?.size === item
                    }
                    onChange={() => onFilterChange(type, item)}
                  />
                  <FilterItemSquare $type={type}>
                    <Icon
                      id={'check'}
                      width={18}
                      height={18}
                      style={{
                        display:
                          selectedColor?.color === item ||
                          selectedSize?.size === item
                            ? 'block'
                            : 'none',
                      }}
                    />
                  </FilterItemSquare>
                </div>
              </ListItem>
            ) : (
              <ListItem
                $type={type}
                key={index}
                onClick={() => handleCheckboxChange(index, item)}
              >
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
                      style={{
                        display: checkedItems[index] ? 'block' : 'none',
                      }}
                    />
                  </FilterItemSquare>
                </div>
              </ListItem>
            )}
          </Fragment>
        ))}
      </CategoriesList>
    </List>
  );
};
