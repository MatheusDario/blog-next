import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardPros = {
  slug: string;
  cover: string;
  title: string;
};

export function PostCard({ slug, cover, title }: PostCardPros) {
  return (
    <Container>
      <PostCardCover>
        <Link href="/api/post/[slug]" as={`/api/post/${slug}`}>
          <img src={cover} alt={title} />
        </Link>
      </PostCardCover>

      <PostCardHeading>
      <Link href="/api/post/[slug]" as={`/api/post/${slug}`}>
         <span>{title}</span>
        </Link>
      </PostCardHeading>
    </Container>
  );
}
