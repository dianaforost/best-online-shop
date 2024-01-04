import {
  ButtonList,
  Container,
  Section,
  Title,
} from './FilteredCatalogPage.styled';

export const FilteredCatalogPage = ({ category }) => {
  const categoryTitles = {
    women: 'Одяг для жінки',
    men: 'Одяг для чоловіка',
    novelty: 'Новинки',
    all: 'Весь одяг',
  };
  const categories = ['Футболки', 'Топи', 'Шорти', 'Штани', 'Костюми'];
  const title = categoryTitles[category];

  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        <ButtonList>Категорії</ButtonList>
      </Container>
    </Section>
  );
};
