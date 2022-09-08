import { useState, useEffect } from 'react';
import { getTrending } from 'servises/api';
import { MoviesList } from 'components/MovieList/MoviesList';
import { MainTitle } from 'components/CommonStyles/MainTitle.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <MainTitle>Today's trending movies</MainTitle>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}
