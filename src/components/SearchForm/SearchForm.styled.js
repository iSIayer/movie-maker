import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';

export const SearchingForm = styled(Form)`
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #dde1e7;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
`;

export const SearchFormInput = styled(Field)`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  color: ${p => p.theme.colors.text};
  background-color: transparent;

  ::placeholder {
    color: ${p => p.theme.colors.text};
  }
`;

// SearchForm Button
export const SearchFormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.text};
  transition: color 450ms ease-in-out;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const SearchFormBtnIcon = styled(FaSearch)`
  width: 25px;
  height: 25px;
`;
