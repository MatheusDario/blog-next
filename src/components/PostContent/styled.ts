import styled, { css } from 'styled-components';

export const Container = styled.article`
  img {
    width: 100%;
  }

  p {
    margin: ${({theme}) => theme.spacing.medium} 0;
  }

  ul,
  ol {
    margin: ${({theme}) => theme.spacing.medium}
  }

  pre {
    ${({theme}) => css`
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.lightGray};
      color: ${theme.colors.darkGray};
      padding: ${theme.spacing.large};
      line-height: 1.2em;
      font-size: ${theme.spacing.medium};
    `}
  }
`;