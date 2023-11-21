import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    justify-content: center;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
  `}
`;
