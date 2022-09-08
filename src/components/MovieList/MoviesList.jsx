import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieList, MovieListItem, MovieListImg } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(movie => {
        return (
          <MovieListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieListImg
                src={
                  movie.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
                alt=""
              />
            </Link>
          </MovieListItem>
        );
      })}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
