import styled from 'styled-components';

export const MovieInfoCard = styled.div`
  display: flex;
  max-width: 1200px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.text};
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const MovieInfoImg = styled.img`
  display: block;
  width: 350px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const MovieInfoTitle = styled.h2`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
`;

export const MovieInfoBlock = styled.div`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.info_block};
`;

export const PreInfoTitle = styled.h5`
  text-transform: uppercase;
  color: ${p => p.theme.colors.pretitle};
`;
