import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovies } from 'servises/api';
import { MoviesList } from 'components/MovieList/MoviesList';
import { MainTitle } from 'components/CommonStyles/MainTitle.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesContainer } from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    let filmName = searchParams.get('name') ?? '';
    if (filmName === '') {
      return;
    } else {
      getSearchMovies({
        query: filmName,
        page: 1,
      }).then(result => {
        setSearchResult(result.data.results);
      });
    }
  }, [searchParams]);

  const handlerSubmit = value => {
    if (value.query.trim() === '') {
      toast('Please, enter a word', {});
      return;
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <MoviesContainer>
      <MainTitle>search movie by keyword</MainTitle>
      <SearchForm onSubmit={handlerSubmit} value={searchParams.get('name')} />
      <MoviesList movies={searchResult} />
    </MoviesContainer>
  );
}
