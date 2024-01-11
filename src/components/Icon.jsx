import Sprite from '../images/icons/sprite.svg';

export const Icon = ({ id, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${Sprite}#icon-${id}`} />
    </svg>
  );
};
