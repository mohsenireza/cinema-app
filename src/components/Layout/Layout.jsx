import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <section className="layout">
      <div className="layout__container">
        <Outlet />
      </div>
    </section>
  );
}

export default Layout;
