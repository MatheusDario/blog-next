import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacing.medium};
    text-align: center;
    font-weight: bold;
  `}
`
