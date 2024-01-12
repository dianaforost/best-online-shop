import Sprite from '../../images/icons/sprite.svg';

export const Icon = ({ id, width, height, style }) => {
  return (
    <svg width={width} height={height} style={style && { ...style }}>
      <use href={`${Sprite}#icon-${id}`} />
    </svg>
  );
};
