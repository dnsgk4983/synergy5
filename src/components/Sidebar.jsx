import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'sidebar__link active' : 'sidebar__link'
          }
          to="/"
        >
          대시보드
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'sidebar__link active' : 'sidebar__link'
          }
          to="/call-support"
        >
          콜 서포트
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;