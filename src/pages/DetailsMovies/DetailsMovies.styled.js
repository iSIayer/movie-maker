import styled from 'styled-components';

export const MovieData = styled.div`
  max-width: 768px;
`;

export const AddListItem = styled.li`
  color: ${p => p.theme.colors.pretitle};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
`;

export const MoveInfoTitle = styled.h2`
  color: ${p => p.theme.colors.accent};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
