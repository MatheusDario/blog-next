import Markdown from 'react-markdown'

import { countAllPosts } from '@/data/count-all-posts';
import { getPosts } from '@/data/get-all-posts';
import { getPost } from '@/data/get-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <>
      <p>{post.attributes.title}</p>
      <p>
        <Markdown>{post.attributes.content}</Markdown>
      </p>
    </>
  );
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPost(context.params?.slug);

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};
