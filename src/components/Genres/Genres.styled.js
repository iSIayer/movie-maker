import styled from 'styled-components';

export const GenresList = styled.ul`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  color: ${p => p.theme.colors.accent};
`;
