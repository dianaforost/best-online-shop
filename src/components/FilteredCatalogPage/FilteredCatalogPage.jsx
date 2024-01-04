import { Container, Section, Title } from './FilteredCatalogPage.styled';

export const FilteredCatalogPage = ({ category }) => {
  const categoryTitles = {
    women: 'Одяг для жінки',
    men: 'Одяг для чоловіка',
    novelty: 'Новинки',
    all: 'Весь одяг',
  };
  const title = categoryTitles[category];

  return (
    <Section>
      <Container>
        <Title>{title}</Title>
      </Container>
    </Section>
  );
};
