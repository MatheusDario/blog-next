//export const API_URL = 'https://myblog-strapi.onrender.com/api/posts';
export const API_URL = 'https://apiblog.matheusdario.com.br/api/posts'
export const POSTS_URL = `${API_URL}/?populate=*`
export const POST_SLUG = `${POSTS_URL}&filters[slug][$eq]=`

export const SITE_NAME = 'Matheus Dario'
export const SITE_URL = 'https://blog.matheusdario.com.br';
export const SITE_URL_DISQUS = 'blog.matheusdario.com.br';