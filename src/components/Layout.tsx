import { Outlet } from 'react-router-dom';
import Header from './Header';
import Categories from './Categories';

export default function Layout() {
  return (
    <>
      <Header />
      <Categories />

      <Outlet />
    </>
  );
}
