import { useDispatch } from 'react-redux';
import {
  Section,
  Title,
  HiddenTitle,
  List,
  ForHer,
  ForHim,
  Btn,
  Container,
  WinterForHer,
  WinterForHim,
} from './GenderSection.styled';
import { getProducts } from '../../redux/products/operations';

export const GenderSection = ({ type }) => {
  const dispatch = useDispatch();
  dispatch(getProducts());
  return (
    <Section>
      <Container>
        {type === 'winter' ? (
          <>
            <Title>Зимова колекція</Title>
            <List>
              <WinterForHer>
                <Btn to={'/catalog/women'}>Для неї</Btn>
              </WinterForHer>
              <WinterForHim>
                <Btn to={'/catalog/man'}>Для нього</Btn>
              </WinterForHim>
            </List>
          </>
        ) : (
          <>
            <HiddenTitle>Для неї / Для нього</HiddenTitle>
            <List>
              <ForHer>
                <Btn to={'/catalog/women'}>Для неї</Btn>
              </ForHer>
              <ForHim>
                <Btn to={'/catalog/man'}>Для нього</Btn>
              </ForHim>
            </List>
          </>
        )}
      </Container>
    </Section>
  );
};
