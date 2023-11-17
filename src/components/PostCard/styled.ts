import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.smal};
  img {
    display: block;
    width: 100%;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    span {
      color: ${theme.colors.darkGray};
    }
  `}
`;
