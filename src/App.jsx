import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CallSupport from './pages/CallSupport/CallSupport';

import useAuth from './hooks/useAuth';

const App = () => {
  const { getCurrentUser } = useAuth();

  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  if (!currentUser) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard currentUser={currentUser} />}
      />

      <Route
        path="/call-support"
        element={<CallSupport currentUser={currentUser} />}
      />
    </Routes>
  );
};

export default App;