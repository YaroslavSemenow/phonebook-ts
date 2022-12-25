import Container from 'components/Container';
import { Outlet } from 'react-router-dom';

export default function LayoutMain() {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
