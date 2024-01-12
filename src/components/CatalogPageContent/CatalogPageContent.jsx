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
            <Btn to={'women'}>Для неї</Btn>
          </ForHer>
          <ForHim>
            <Btn to={'man'}>Для нього</Btn>
          </ForHim>
          <Novelties>
            <Btn to={'novelty'}>Новинки</Btn>
          </Novelties>
          <All>
            <Btn to={'all'}>Весь товар</Btn>
          </All>
        </List>
      </Container>
    </Section>
  );
};
