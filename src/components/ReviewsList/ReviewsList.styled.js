import styled from 'styled-components';

export const ReviewsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  font-size: 10px;
  color: ${p => p.theme.colors.text};
`;

export const ReviewerTitle = styled.h4`
  color: ${p => p.theme.colors.accent};
`;
