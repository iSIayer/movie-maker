import PropTypes from 'prop-types';
import { GenresList } from './Genres.styled';

export const Genres = ({ movieGenres }) => {
  return (
    <GenresList>
      {movieGenres.map(genre => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </GenresList>
  );
};

Genres.propTypes = {
  movieGenres: PropTypes.array.isRequired,
};
