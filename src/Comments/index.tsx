import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';

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
          url: `http://localhost:3000/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Container>
  );
};
