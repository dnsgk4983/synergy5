import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CallSupport from './pages/CallSupport/CallSupport';

import useAuth from './hooks/useAuth';

const App = () => {
  const { getCurrentUser, logout } = useAuth();

  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        }
      />

      <Route
        path="/call-support"
        element={
          <CallSupport
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        }
      />
    </Routes>
  );
};

export default App;