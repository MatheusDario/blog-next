import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`;
