import { GetStaticPaths, GetStaticProps } from 'next';
import { getPosts } from '@/data/get-all-posts';
import HomePage from '@/containers/HomePage';
import { PostData } from '@/domain/posts/post';
import { useRouter } from 'next/router';
import { LoadingPage } from '@/components/LoadingPage';
import Error from 'next/error';
import { PaginationData } from '@/domain/posts/paginations';
import { countAllPosts } from '@/data/count-all-posts';


export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const route = useRouter();
  if (route.isFallback) <LoadingPage />;

  if (!posts) return <Error statusCode={404} />;

  return <HomePage category={category} posts={posts} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = context.params?.param
    ? Number(context.params?.param[0])
    : Number();
  const category = context.params?.param ? context.params.param[1] : '';

  const postsPerPage = 3;
  const starFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previusPage = page - 1;

  const categoryQuery = category
    ? `&filters[categorie][name][$eq]=${category}`
    : '';
  const urlQuery = `sort=id:desc&pagination[start]=${starFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const posts = await getPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    previusPage,
    category,
    postsPerPage,
  };

  return {
    props: { posts, category, pagination },
    revalidate: 300,
  };
};
