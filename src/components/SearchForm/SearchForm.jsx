import { Formik } from 'formik';
import {
  SearchingForm,
  SearchFormInput,
  SearchFormBtn,
  SearchFormBtnIcon,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <SearchingForm>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Enter movie name"
        />
        <SearchFormBtn type="submit">
          <SearchFormBtnIcon />
        </SearchFormBtn>
      </SearchingForm>
    </Formik>
  );
};
