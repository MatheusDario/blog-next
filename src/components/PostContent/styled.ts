import styled, { css } from 'styled-components';

export const Container = styled.article`
  img {
    width: 100%;
  }

  h2 {
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    margin: ${({theme}) => theme.spacing.medium} 0;
    line-height: 1.5em;
    text-indent: 30px;
    text-align: justify;
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

  a {
    font-weight: bold;
  }
`;