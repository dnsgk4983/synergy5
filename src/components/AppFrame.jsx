import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AppFrame = ({ children, currentUser, onLogout }) => {
  return (
    <main className="app-frame">
      <Header currentUser={currentUser} onLogout={onLogout} />

      <div className="app-content">
        <Sidebar />

        <section className="app-section">
          {children}
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default AppFrame;