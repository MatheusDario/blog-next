import Head from 'next/head';
import { PostData } from '@/domain/posts/post';
import { Container } from './styled';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Heading } from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostContent } from '@/components/PostContent';
import { Comments } from '@/components/Comments';

export type PostPros = {
  post: PostData;
};

export const Post = ({ post }: PostPros) => {
  return (
    <>
      <Head>
        <title>{post.attributes.title}</title>
        <meta name="description" content={post.attributes.title} />
      </Head>
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
          <Comments title={post.attributes.title} slug={post.attributes.slug} />
        </Container>
      </MainContainer>
    </>
  );
};
