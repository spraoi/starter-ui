import Box from '@spraoi/base/Box';
import React from 'react';
import { BarLoader } from 'react-spinners';
import { ThemeConsumer } from 'styled-components';

const PageSpinner = () => (
  <Box display="flex" justifyContent="center" py={5}>
    <ThemeConsumer>
      {theme => <BarLoader color={theme.colors.text.primary} />}
    </ThemeConsumer>
  </Box>
);

export default PageSpinner;
