import { FilteredCatalogPage } from 'components/FilteredCatalogPage/FilteredCatalogPage';
import { useParams } from 'react-router';

export const ProductsCatalogPage = () => {
  const { category } = useParams();
  console.log(category);
  return <FilteredCatalogPage category={category} />;
};
