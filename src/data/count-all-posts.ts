import { API_URL } from '@/config/app-config';
import { fetchJson } from '@/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${API_URL}/count?${query}`
  const numberOfPosts = fetchJson<string>(url);
  return numberOfPosts;
};
