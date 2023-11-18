import { PostData } from '@/domain/posts/post';
import { Container } from './styled';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Heading } from '@/components/Heading';

export type PostPros = {
  post: PostData;
}

export const Post = ({ post }:PostPros ) => {
  return (
    <>
    <Header />
    <MainContainer>
      <Container>
        <Heading>{post.attributes.title}</Heading>
        <div>{post.attributes.content}</div>
      </Container>
    </MainContainer>
    </>
  );
}