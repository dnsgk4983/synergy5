import { useState } from 'react';
import AppFrame from '../../components/AppFrame';
import DASHBOARD_MENU from './data/dashboardMenu';
import TeamDailyReport from './components/TeamDailyReport';

const Dashboard = ({ currentUser }) => {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <AppFrame currentUser={currentUser}>
      <div className="dashboard">
        {!activeMenu && (
          <>
            <div className="dashboard__title">
              <h1>
                <span>{currentUser?.name}</span>
                <span>{currentUser?.role}</span>님 안녕하세요.
              </h1>
            </div>

            <div className="dashboard__menu">
              {DASHBOARD_MENU.map((menu) => (
                <button
                  key={menu.id}
                  className="dashboard__menu__button"
                  type="button"
                  onClick={() => setActiveMenu(menu.id)}
                >
                  <strong>{menu.title}</strong>
                  <span>{menu.description}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {activeMenu === 'team-daily-report' && (
          <TeamDailyReport />
        )}
      </div>
    </AppFrame>
  );
};

export default Dashboard;