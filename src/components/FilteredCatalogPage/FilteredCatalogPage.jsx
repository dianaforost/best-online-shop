import { useState } from 'react';
import {
  CatalogContent,
  Container,
  FilterList,
  ProductsList,
  Section,
  Title,
} from './FilteredCatalogPage.styled';
import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { FilterItem } from './FilterItem/FilterItem';
import { categoryTitles } from 'data/categoryTitles';

export const FilteredCatalogPage = ({ category }) => {
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);
  const [isSizesShown, setIsSizesShown] = useState(false);
  const initialCheckedStates = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const toggleCategoriesSearch = () => {
    setIsCategoriesShown(!isCategoriesShown);
  };
  const toggleSizesSearch = () => {
    setIsSizesShown(!isSizesShown);
  };

  const categories = ['Футболки', 'Топи', 'Шорти', 'Штани', 'Костюми'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const title = categoryTitles[category];
  const products = [
    {
      id: 1,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 2,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 3,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 4,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 5,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 6,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
  ];

  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        <CatalogContent>
          <FilterList>
            <FilterItem
              label="Категорії"
              items={categories}
              isShown={isCategoriesShown}
              toggleSearch={toggleCategoriesSearch}
              initialChecked={initialCheckedStates}
            />
            <FilterItem
              label="Розмір"
              items={sizes}
              isShown={isSizesShown}
              toggleSearch={toggleSizesSearch}
              initialChecked={initialCheckedStates}
            />
          </FilterList>
          <ProductsList>
            {products.map(item => (
              <ProductComponent key={item.id} item={item} />
            ))}
          </ProductsList>
        </CatalogContent>
      </Container>
    </Section>
  );
};
