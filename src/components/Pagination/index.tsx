import { PaginationData } from '@/domain/posts/paginations';
import { Container, NextLink, PreviusLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  previusPage,
  postsPerPage,
  category,
}: PaginationProps) => {
  nextPage = nextPage || 0;
  postsPerPage = postsPerPage || 0;
  numberOfPosts = numberOfPosts || 0;
  previusPage = previusPage || 0;

  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previusLink = `/post/page/${previusPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage > postsPerPage + numberOfPosts; // numberOfPosts está recebendo o valor incorreto
  const hasPreviusPage = previusPage >= 1;

  return (
    <Container>
      {hasPreviusPage && (
        <PreviusLink>
          <Link href={previusLink}>Anterior</Link>
        </PreviusLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>Próximo</Link>
        </NextLink>
      )}
    </Container>
  );
};
