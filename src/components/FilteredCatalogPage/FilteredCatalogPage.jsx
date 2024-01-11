import { useState } from 'react';
import {
  ButtonList,
  CatalogContent,
  CategoriesList,
  Container,
  FilterItemSquare,
  FilterList,
  ProductsList,
  Section,
  Title,
} from './FilteredCatalogPage.styled';
import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { Icon } from 'components/Icon';

export const FilteredCatalogPage = ({ category }) => {
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);
  const [isSizesShown, setIsSizesShown] = useState(false);

  const toggleCategoriesSearch = () => {
    setIsCategoriesShown(!isCategoriesShown);
  };
  const toggleSizesSearch = () => {
    setIsSizesShown(!isSizesShown);
  };

  const categoryTitles = {
    women: 'Одяг для жінки',
    men: 'Одяг для чоловіка',
    novelty: 'Новинки',
    all: 'Весь одяг',
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
            <div>
              <ButtonList onClick={toggleCategoriesSearch}>
                Категорії
                {!isCategoriesShown ? (
                  <Icon id={'angle-down'} width={24} height={24} />
                ) : (
                  <Icon id={'angle-up'} width={24} height={24} />
                )}
              </ButtonList>

              <CategoriesList $isVisible={isCategoriesShown}>
                {categories.map((item, index) => (
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
            <div>
              <ButtonList onClick={toggleSizesSearch}>
                Розмір
                {!isSizesShown ? (
                  <Icon id={'angle-down'} width={24} height={24} />
                ) : (
                  <Icon id={'angle-up'} width={24} height={24} />
                )}
              </ButtonList>
              <CategoriesList $isVisible={isSizesShown}>
                {sizes.map((item, index) => (
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
