import { Icon } from 'components/Icon/Icon';
import { DescriptionBtn, DescriptionList } from './ProductDescription.styled';

export const ProductDescription = ({
  label,
  toggleDescrSearch,
  isDescrShown,
  toggleDeliverySearch,
  isDeliveryShown,
}) => {
  return (
    <div>
      {toggleDescrSearch ? (
        <>
          <DescriptionBtn onClick={toggleDescrSearch}>
            {label}
            {!isDescrShown ? (
              <Icon id={'angle-down'} width={24} height={24} />
            ) : (
              <Icon id={'angle-up'} width={24} height={24} />
            )}
          </DescriptionBtn>
          <DescriptionList $isVisible={isDescrShown}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              consequatur, dolores perferendis blanditiis delectus obcaecati
              recusandae quod excepturi? Corrupti quibusdam nisi ducimus
              repellat. Autem mollitia debitis saepe, harum nam nobis!
            </p>
          </DescriptionList>
        </>
      ) : toggleDeliverySearch ? (
        <>
          <DescriptionBtn onClick={toggleDeliverySearch} $type={true}>
            {label}
            {!isDeliveryShown ? (
              <Icon id={'angle-down'} width={24} height={24} />
            ) : (
              <Icon id={'angle-up'} width={24} height={24} />
            )}
          </DescriptionBtn>
          <DescriptionList $isVisible={isDeliveryShown}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              consequatur, dolores perferendis blanditiis delectus obcaecati
              recusandae quod excepturi? Corrupti quibusdam nisi ducimus
              repellat. Autem mollitia debitis saepe, harum nam nobis!
            </p>
          </DescriptionList>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
