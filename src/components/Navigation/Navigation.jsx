import {
  NavigationList,
  NavigationListItem,
  NavigationLink,
  NavigationLinkIconHome,
  NavigationLinkIconMovie,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationListItem>
          <NavigationLink to="/">
            <NavigationLinkIconHome />
            Home
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="/movies">
            <NavigationLinkIconMovie />
            Movies
          </NavigationLink>
        </NavigationListItem>
      </NavigationList>
    </nav>
  );
};
