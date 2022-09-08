import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { SiThemoviedatabase } from 'react-icons/si';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationListItem = styled.li`
  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.8em;
  line-height: 1.2;
  color: ${p => p.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 2px;

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export const NavigationLinkIconHome = styled(AiOutlineHome)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const NavigationLinkIconMovie = styled(SiThemoviedatabase)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
