import React from 'react';
import styled from 'styled-components';
import { AuthConsumer } from '@spraoi/auth';
import { Box, Button } from '@spraoi/base';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../../images/spraoi-logo.svg';

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.5rem;
  width: 6.2rem;
`;

const Header = () => (
  <AuthConsumer>
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
          <StyledLogo alt="spraoi" />
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
  </AuthConsumer>
);

export default Header;
