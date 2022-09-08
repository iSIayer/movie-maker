import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMoveDetails } from 'servises/api';
// import { MovieInfoBlock } from 'components/MoveInfo/MovieInfo.styled';
import { MoveInfoTitle } from './DetailsMovies.styled';
import { MovieInfo } from 'components/MoveInfo/MovieInfo';
import {
  BackLink,
  BackLinkIcon,
} from 'components/CommonStyles/BackLink.styled';
import { LoaderSpinner } from 'components/Loader/Loader';
import { MovieData, AddListItem } from './DetailsMovies.styled';

export default function DetailsMovies() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    getMoveDetails(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <MovieData>
      <BackLink to={location}>
        <BackLinkIcon />
        Back to movies
      </BackLink>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <MoveInfoTitle>Addictional information:</MoveInfoTitle>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginBottom: '10px',
            }}
          >
            <AddListItem>
              <Link to="credits" state={{ from: location }}>
                Cast
              </Link>
            </AddListItem>
            <AddListItem>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </AddListItem>
          </ul>
          <Suspense fallback={<LoaderSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </MovieData>
  );
}
