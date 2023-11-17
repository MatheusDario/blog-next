import { Container } from './styled';

export type MainContainerPros = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerPros) {
  return <Container> {children} </Container>;
}
