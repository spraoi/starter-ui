import React from 'react';
import { BarLoader } from 'react-spinners';
import { Box } from '@spraoi/base';
import theme from '../../theme';

const PageSpinner = () => (
  <Box display="flex" justifyContent="center" py="xxxl">
    <BarLoader color={theme.colors.textPrimary} />
  </Box>
);

export default PageSpinner;
