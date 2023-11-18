import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  coverAlt: string;
};

export const PostCover = ({ coverUrl, coverAlt }: PostCoverProps) => {
  return <Container src={coverUrl} alt={coverAlt} />;
};
