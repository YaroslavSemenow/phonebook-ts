import Container from 'components/Container';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
