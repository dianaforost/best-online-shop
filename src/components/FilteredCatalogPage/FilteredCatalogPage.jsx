import { useState } from 'react';
import {
  ButtonList,
  CategoriesList,
  Container,
  ProductsItem,
  ProductsList,
  ProductsTitle,
  Section,
  Title,
} from './FilteredCatalogPage.styled';

export const FilteredCatalogPage = ({ category }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleShowSearch = () => {
    setIsShown(!isShown);
  };

  const categoryTitles = {
    women: 'Одяг для жінки',
    men: 'Одяг для чоловіка',
    novelty: 'Новинки',
    all: 'Весь одяг',
  };
  const categories = ['Футболки', 'Топи', 'Шорти', 'Штани', 'Костюми'];
  const title = categoryTitles[category];
  const products = [
    {
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
  ];

  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <ButtonList onClick={toggleShowSearch}>Категорії</ButtonList>
            <CategoriesList $isVisible={isShown}>
              {categories.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </CategoriesList>
          </div>
          <ProductsList>
            {products.map(item => (
              <ProductsItem>
                <div
                  style={{
                    width: '282px',
                    height: '300px',
                    backgroundColor: '#D9D9D9',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <ProductsTitle>{item.title}</ProductsTitle>
                  <p>{item.price}</p>
                </div>
              </ProductsItem>
            ))}
          </ProductsList>
        </div>
      </Container>
    </Section>
  );
};
