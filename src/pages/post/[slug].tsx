import Error from 'next/error';
import { useRouter } from 'next/router';
import { countAllPosts } from '@/data/count-all-posts';
import { getPosts } from '@/data/get-all-posts';
import { getPost } from '@/data/get-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/containers/Post';
import { LoadingPage } from '@/components/LoadingPage';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingPage />;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  if (!post.attributes) {
    return <Error statusCode={404} />;
  }

  if (!post.attributes.slug) {
    return <Error statusCode={404} />;
  }

  if (!post.attributes.content) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPost(context.params?.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
    revalidate: 300,
  };
};
