import {
  Container,
  LinkTo,
  Section,
  Text,
  Title,
} from './NotFoundContent.styled';

export const NotFoundContent = () => {
  return (
    <Section>
      <Container>
        <Title>404</Title>
        <Text>Вибачте! Сторінку, яку Ви шукаєте, не може бути знайдена</Text>
        <LinkTo to="/">Повернутись на головну сторінку</LinkTo>
      </Container>
    </Section>
  );
};
