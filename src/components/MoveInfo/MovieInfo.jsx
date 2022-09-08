import PropTypes from 'prop-types';
import { Genres } from 'components/Genres/Genres';
import {
  MovieInfoCard,
  MovieInfoImg,
  MovieInfoTitle,
  MovieInfoBlock,
  PreInfoTitle,
} from './MovieInfo.styled';

// Functions for normalizing numbers of the year and video rating

const yearNormalize = value => {
  const year = value.slice(0, 4);
  return year;
};

const ratingNormalize = value => {
  const rating = value * 10;
  return rating.toFixed(1) + '%';
};
// ===========================================================

export const MovieInfo = ({ movie }) => {
  return (
    <MovieInfoCard>
      <MovieInfoImg
        src={
          movie.poster_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }
        alt=""
      />
      <div>
        <MovieInfoTitle>
          {movie.title}
          {'  '}
          <span>({yearNormalize(movie.release_date)})</span>
        </MovieInfoTitle>
        <MovieInfoBlock>
          Rating: <span>{ratingNormalize(movie.vote_average)}</span>
        </MovieInfoBlock>
        <MovieInfoBlock>
          <PreInfoTitle>Overview:</PreInfoTitle> {movie.overview}
        </MovieInfoBlock>
        <MovieInfoBlock>
          <PreInfoTitle>Genres:</PreInfoTitle>
          {<Genres movieGenres={movie.genres} />}
        </MovieInfoBlock>
      </div>
    </MovieInfoCard>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
