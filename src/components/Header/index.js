import React from 'react';
import styled from 'styled-components';
import { Context as AuthContext } from '@spraoi/auth';
import { Box, Button } from '@spraoi/base';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../../images/spraoi-logo.svg';

const StyledLogo = styled(Logo)`
  position: relative;
  bottom: -0.25rem;
  width: 6.2rem;
`;

const StyledNavItem = styled.li``;

const Header = () => (
  <AuthContext.Consumer>
    {({ signOut, user: { familyName, givenName } }) => (
      <Box display="flex" justifyContent="space-between" p="md">
        <Link to="/">
          <StyledLogo alt="spraoi" />
        </Link>
        <nav>
          {givenName}&nbsp;{familyName}
          <Box as="ul" display="flex">
            <StyledNavItem>
              <Button onClick={signOut} simple>
                Log Out
              </Button>
            </StyledNavItem>
          </Box>
        </nav>
      </Box>
    )}
  </AuthContext.Consumer>
);

export default Header;
