import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';
import { SITE_URL, SITE_URL_DISQUS } from '@/config/app-config';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-matheusdario"
        config={{
          url: `${SITE_URL_DISQUS}${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Container>
  );
};