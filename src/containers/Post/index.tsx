import { PostData } from '@/domain/posts/post';
import { Container } from './styled';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Heading } from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostContent } from '@/components/PostContent';

export type PostPros = {
  post: PostData;
};

export const Post = ({ post }: PostPros) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <Heading>{post.attributes.title}</Heading>
          <PostCover
            coverUrl={post.attributes.cover.data.attributes.formats.large.url}
            coverAlt={post.attributes.title}
          />
          <PostDetails
            date={post.attributes.createdAt}
            author={post.attributes.author.data.attributes.name}
            category={post.attributes.categorie.data.attributes.name}
          />
          <PostContent content={post.attributes.content} />
        </Container>
      </MainContainer>
    </>
  );
};
