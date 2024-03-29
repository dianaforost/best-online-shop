import { useCallback, useState } from 'react';
import {
  CatalogContent,
  Container,
  FilterList,
  NextButton,
  ProductsList,
  Results,
  Section,
  Title,
  Wrapper,
} from './FilteredCatalogPage.styled';
import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { FilterItem } from './FilterItem/FilterItem';
import { categoryTitles } from 'data/categoryTitles';
import { FilterPagination } from './FilterPagination/FilterPagination';
import { Icon } from 'components/Icon/Icon';

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
  const response = { products, total: 98 };
  const [page, setCurrentPage] = useState(0);
  const handlePageChange = useCallback(page => {
    setCurrentPage(page);
  }, []);
  const handleNextPage = () => {
    if (page < response.total - 1) {
      handlePageChange(page + 1);
    }
  };
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = filter => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <Results>Результати({response.total})</Results>
            <div style={{ display: 'flex' }}>
              <ul style={{ display: 'flex', gap: '3px' }}>
                <FilterPagination
                  total={response.total}
                  page={page}
                  handlePageChange={handlePageChange}
                />
              </ul>
              <NextButton
                onClick={handleNextPage}
                disabled={response.total === 1 ? true : false}
              >
                <Icon id={'angle-right'} width={8} height={15} />
              </NextButton>
            </div>
          </div>
        </Wrapper>
        <CatalogContent>
          <FilterList>
            <FilterItem
              label="Категорії"
              items={categories}
              isShown={isCategoriesShown}
              toggleSearch={toggleCategoriesSearch}
              initialChecked={initialCheckedStates}
              onFilterChange={handleFilterChange}
            />
            <FilterItem
              label="Розмір"
              items={sizes}
              isShown={isSizesShown}
              toggleSearch={toggleSizesSearch}
              initialChecked={initialCheckedStates}
              onFilterChange={handleFilterChange}
            />
          </FilterList>
          <ProductsList>
            {products.map(item => (
              <ProductComponent
                key={item.id}
                item={item}
                isCatalogPage={true}
              />
            ))}
          </ProductsList>
        </CatalogContent>
      </Container>
    </Section>
  );
};
