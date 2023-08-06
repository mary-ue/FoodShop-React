import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

function Layout() {
  return (
    <>
      <Header />
      <main className="container content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
