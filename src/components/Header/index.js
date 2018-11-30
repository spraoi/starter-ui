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

const Header = () => (
  <AuthContext.Consumer>
    {({ signOut, user: { familyName, givenName } }) => (
      <Box display="flex" justifyContent="space-between" p="md">
        <Link to="/">
          <StyledLogo alt="spraoi" />
        </Link>
        <Box alignItems="center" as="nav" display="flex">
          <Box pr="md">
            {givenName}&nbsp;{familyName}
          </Box>
          <Box as="ul" display="flex">
            <li>
              <Button onClick={signOut} simple>
                Log Out
              </Button>
            </li>
          </Box>
        </Box>
      </Box>
    )}
  </AuthContext.Consumer>
);

export default Header;
