import Box from '@spraoi/base/Box';
import DropdownMenu from '@spraoi/base/DropdownMenu';
import React from 'react';
import { AuthContext } from '@spraoi/auth';
import { Link } from 'gatsby';
import Icon from '../Icon';

const renderMenuItemWithIcon = ([svg, Item], i) => (
  <Box key={i} alignItems="center" display="flex">
    <Icon height="1rem" mr={5} svg={svg} width="1rem" /> <span>{Item}</span>
  </Box>
);

const Header = () => (
  <AuthContext.Consumer>
    {({ isAuthenticated, signOut, user: { familyName, givenName } }) => (
      <Box as="header" width="100%">
        <Box
          alignItems="center"
          display="flex"
          justifyContent={isAuthenticated ? 'space-between' : 'center'}
          maxWidth="maxWidths.content"
          mx="auto"
          p={5}
          width="100%"
        >
          <Link to="/">
            <Icon
              alt="Spraoi"
              bottom="-0.25rem"
              position="relative"
              svg="spraoi-logo"
              width="6.2rem"
            />
          </Link>
          {isAuthenticated && (
            <DropdownMenu
              button={<Icon height="1.2rem" svg="user" width="1.2rem" />}
              heading={`Signed in as ${givenName} ${familyName}`}
              itemActions={[signOut]}
              items={[['logout', 'Sign Out']].map(renderMenuItemWithIcon)}
            />
          )}
        </Box>
      </Box>
    )}
  </AuthContext.Consumer>
);

export default Header;
