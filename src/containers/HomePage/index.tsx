import Head from 'next/head';
import { PostData } from '@/domain/posts/post';
import { Container, Category } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';

export type HomePageProps = {
  posts: PostData[];
  category: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
    <Head>
      <title>{SITE_NAME}</title>
      <meta name="description" content="Blog do Matheus Dario" />
    </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.attributes.title}
              slug={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.formats.thumbnail.url}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
