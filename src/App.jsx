import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'components/Container/MainContainer';
import { LoaderSpinner } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const DetailsMovies = lazy(() => import('pages/DetailsMovies/DetailsMovies'));
const Cast = lazy(() => import('pages/DetailsMovies/Cast'));
const Reviews = lazy(() => import('pages/DetailsMovies/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<DetailsMovies />}>
              <Route path="credits" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

