import Markdown from 'react-markdown';

import { Container } from './styled';

export type PostContentProps = {
  content: string;
};

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  );
};
