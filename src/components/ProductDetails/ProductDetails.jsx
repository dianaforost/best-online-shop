import {
  ButtonToCart,
  ButtonToFav,
  Container,
  FlexContainer,
  Image,
  ImageContainer,
  InfoContainer,
  ProductContent,
  ProductId,
  ProductPrice,
  ProductTitle,
  Section,
  Stars,
  SwiperStyled,
  TitleContainer,
  Wrapper,
} from './ProductDetails.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FilterItem } from 'components/FilteredCatalogPage/FilterItem/FilterItem';
import { useState } from 'react';
import { Icon } from 'components/Icon/Icon';
import { Pagination } from 'swiper/modules';
import { ProductDescription } from './ProductDescription/ProductDescription';

export const ProductDetails = ({ productsId }) => {
  const categories = ['білий', 'рожевий', 'сірий', 'чорний'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);
  const [isSizesShown, setIsSizesShown] = useState(false);
  const [isDescrShown, setIsDescrShown] = useState(false);
  const [isDeliveryShown, setIsDeliveryShown] = useState(false);
  const toggleCategoriesSearch = () => {
    setIsCategoriesShown(!isCategoriesShown);
  };
  const toggleSizesSearch = () => {
    setIsSizesShown(!isSizesShown);
  };
  const toggleDescrSearch = () => {
    setIsDescrShown(!isDescrShown);
  };
  const toggleDeliverySearch = () => {
    setIsDeliveryShown(!isDeliveryShown);
  };
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
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  const handleFilterChange = (type, item) => {
    if (type === 'color') {
      setSelectedColor({ color: item });
    } else if (type === 'size') {
      setSelectedSize({ size: item });
    }
  };
  return (
    <Section>
      <Container>
        <FlexContainer>
          <SwiperStyled
            spaceBetween={12}
            slidesPerView={2}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span key=${index} class="${className}" style="background:#0D0C0B;"></span>`;
              },
            }}
            breakpoints={{
              530: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 3,
                direction: 'vertical',
              },
            }}
            modules={[Pagination]}
          >
            {[1, 2, 3, 4, 5, 6].map(number => (
              <SwiperSlide key={number}>
                <ImageContainer></ImageContainer>
              </SwiperSlide>
            ))}
          </SwiperStyled>
          <Image />
        </FlexContainer>
        <InfoContainer>
          <Wrapper>
            <ProductContent>
              <TitleContainer>
                <ProductTitle>Спортивний топ</ProductTitle>
                <ProductId>{productsId}</ProductId>
              </TitleContainer>
              <ProductPrice>940 ₴</ProductPrice>
            </ProductContent>
            <Stars>
              <Icon id={'star'} width={24} height={24} />
              <Icon id={'star'} width={24} height={24} />
              <Icon id={'star'} width={24} height={24} />
              <Icon id={'star'} width={24} height={24} />
              <Icon id={'star'} width={24} height={24} />
            </Stars>
          </Wrapper>
          <FlexContainer>
            <FilterItem
              label="Колір"
              items={categories}
              isShown={isCategoriesShown}
              toggleSearch={toggleCategoriesSearch}
              initialChecked={initialCheckedStates}
              type={'color'}
              onFilterChange={handleFilterChange}
              selectedColor={selectedColor}
            />
            <FilterItem
              label="Розмір"
              items={sizes}
              isShown={isSizesShown}
              toggleSearch={toggleSizesSearch}
              initialChecked={initialCheckedStates}
              type={'size'}
              onFilterChange={handleFilterChange}
              selectedSize={selectedSize}
            />
          </FlexContainer>
          <FlexContainer>
            <ButtonToCart
              onClick={() => console.log(selectedColor, selectedSize)}
            >
              Додати до кошика
            </ButtonToCart>
            <ButtonToFav>Додати до улюбленого</ButtonToFav>
          </FlexContainer>
          <div>
            <ProductDescription
              label={'Опис товару'}
              toggleDescrSearch={toggleDescrSearch}
              isDescrShown={isDescrShown}
            />
            <ProductDescription
              label={'Доставка та повернення'}
              toggleDeliverySearch={toggleDeliverySearch}
              isDeliveryShown={isDeliveryShown}
            />
          </div>
        </InfoContainer>
      </Container>
    </Section>
  );
};
