import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacing.medium};
    max-width: 90rem;
    margin: 0 auto;
  `}
`;
