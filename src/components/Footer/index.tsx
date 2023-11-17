import { SITE_NAME } from '@/config/app-config';
import { Container } from './styled';
import Link from 'next/link';

export function Footer() {
  return (
    <Container>
     <Link target='_blank' href="https://www.linkedin.com/in/matheus-dario/">Feito por &copy; {SITE_NAME}</Link>
    </Container>
  );
}
