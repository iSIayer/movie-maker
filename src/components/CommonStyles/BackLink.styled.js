import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-bottom: 40px;
  padding: 5px;
  color: ${p => p.theme.colors.text};
  text-transform: uppercase;
  background-color: #dde1e7;
  border-radius: 25px;
  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
  transition: color 450ms ease-in-out;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const BackLinkIcon = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
