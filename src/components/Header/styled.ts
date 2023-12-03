import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.color5};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.font.sizes.medium};
    text-align: center;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0, .5);
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
