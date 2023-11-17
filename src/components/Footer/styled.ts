import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.font.sizes.medium};
    text-align: center;
    bottom: 0;
    position: fixed;
    width: 100%;
  `}

  a {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
