import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { Container, DealsList, Section, Title } from './DealsContent.styled';

export const DealsContent = () => {
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
        <Title>Знижки</Title>
        <DealsList>
          {products.map(item => (
            <ProductComponent key={item.id} item={item} />
          ))}
        </DealsList>
      </Container>
    </Section>
  );
};
