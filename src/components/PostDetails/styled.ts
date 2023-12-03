import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.color2};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacing.smal};
    font-style: italic;
  `}
`;