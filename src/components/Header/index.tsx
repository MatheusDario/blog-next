import { SITE_NAME } from '@/config/app-config';
import { Container } from './styled';
import Link from 'next/link';

export function Header() {
  return (
    <Container>
     <Link href="/">{SITE_NAME}</Link>
    </Container>
  );
}
