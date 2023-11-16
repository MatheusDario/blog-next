import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPosts = async (): Promise<PostData[]> => {
  const post = fetchJson<PostData[]>(POSTS_URL);
  return post;
};
