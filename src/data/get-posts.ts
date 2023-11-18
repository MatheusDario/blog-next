import { POST_SLUG } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_SLUG}${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  return jsonPosts;
};
