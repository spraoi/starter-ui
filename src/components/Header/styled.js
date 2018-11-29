import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/spraoi-logo.svg';

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.backgroundDark};
`;

export const StyledLogo = styled(Logo)`
  width: 8rem;
`;
