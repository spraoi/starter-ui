import React from 'react';
import { AuthContext } from '@spraoi/auth';
import { Box, Button } from '@spraoi/base';
import { Link } from 'gatsby';
import Logo from '../../images/spraoi-logo.svg';

const Header = () => (
  <AuthContext.Consumer>
    {({ isAuthenticated, signOut, user: { familyName, givenName } }) => (
      <Box
        as="header"
        display="flex"
        justifyContent={isAuthenticated ? 'space-between' : 'center'}
        maxWidth="content"
        mx="auto"
        p="md"
      >
        <Link to="/">
          <Box
            alt="Spraoi"
            as={Logo}
            bottom="-0.5rem"
            position="relative"
            width="6.2rem"
          />
        </Link>
        {isAuthenticated && (
          <Box alignItems="center" as="nav" display="flex">
            <Box pr="md">
              {givenName}&nbsp;{familyName}
            </Box>
            <Box as="ul" display="flex">
              <li>
                <Button onClick={signOut} simple>
                  Sign Out
                </Button>
              </li>
            </Box>
          </Box>
        )}
      </Box>
    )}
  </AuthContext.Consumer>
);

export default Header;
