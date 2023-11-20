import HomePage from '@/containers/HomePage';
import { getPosts } from '@/data/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `&filters[categorie][name][$eq]=${ctx.query.category}`
  const posts = await getPosts(urlQuery);

  return {
    props: { posts, category: ctx.query.category },
  };
};
