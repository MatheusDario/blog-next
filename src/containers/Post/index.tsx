import { PostData } from '@/domain/posts/post';
import { Container } from './styled';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';

export type PostPros = {
  post: PostData;
}

export const Post = ({ post }:PostPros ) => {
  return (
    <>
    <Header />
    <MainContainer>
      <Container>
        <h2>{post.attributes.title}</h2>
        <div>{post.attributes.content}</div>
      </Container>
    </MainContainer>
    </>
  );
}