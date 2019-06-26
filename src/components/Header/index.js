import React from 'react';
import styled from 'styled-components';
import { AuthContext } from '@spraoi/auth';
import { Box, Button } from '@spraoi/base';
import { Link } from 'gatsby';
import Logo from '../../images/icons/spraoi-logo.svg';

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.5rem;
  width: 6.2rem;
`;

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
          <StyledLogo alt="Spraoi" />
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
