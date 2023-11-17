import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`
  const post = fetchJson<PostData[]>(url);
  return post;
};
