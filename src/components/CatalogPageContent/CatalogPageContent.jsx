import {
  All,
  Btn,
  Container,
  ForHer,
  ForHim,
  List,
  Novelties,
  Section,
  Title,
} from './CatalogPageContent.styled';

export const CatalogPageContent = () => {
  return (
    <Section>
      <Container>
        <Title>Каталог</Title>
        <List>
          <ForHer>
            <Btn to={'/women_catalog'}>Для неї</Btn>
          </ForHer>
          <ForHim>
            <Btn to={'/men_catalog'}>Для нього</Btn>
          </ForHim>
          <Novelties>
            <Btn to={'/men_catalog'}>Для нього</Btn>
          </Novelties>
          <All>
            <Btn to={'/men_catalog'}>Для нього</Btn>
          </All>
        </List>
      </Container>
    </Section>
  );
};
