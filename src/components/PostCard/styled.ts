import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;
  box-shadow: 2px 1px 1px 1px rgba(0,0,0, .1);

  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.smal};
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-align: center;

    span {
      color: black;
      
    }
  `}
`;
