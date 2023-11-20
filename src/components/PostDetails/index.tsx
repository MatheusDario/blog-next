import { Container } from './styled';
import { PostDate } from '../PostDate';
import Link from 'next/link';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return <Container>
    Publicado em <PostDate date={date} /> Por: {author} | <Link href={`/categories/${category}`}>{category}</Link>
  </Container>;
};
