import { Outlet } from 'react-router-dom';
import Header from './Header';
import Categories from './Categories';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Categories />

        <Outlet />
      </main>
    </div>
  );
}
