import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';
import { MdExpandMore } from 'react-icons/md';

export const Button = ({ onLoadMoreClick }) => (
  <ButtonLoadMore type="button" onClick={onLoadMoreClick}>
    <MdExpandMore size="24" />
    Load more
  </ButtonLoadMore>
);

Button.propTypes = { onLoadMoreClick: PropTypes.func.isRequired };
