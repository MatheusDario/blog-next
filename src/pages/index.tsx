import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';
import { getPosts } from '@/data/get-all-posts';
import HomePage from '@/containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  posts.map((post) => console.log(post.attributes.createdAt)) 
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts('sort=id:desc&pagination[start]=0&pagination[limit]=10');

  return {
    props: { posts },
  };
};
