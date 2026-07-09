const Header = ({ currentUser }) => {
  return (
    <header className="app-header">
      <h1 className="app-header__logo">SYNERGY 5</h1>

      <nav className="app-header__nav">
        <span>{currentUser?.name}</span>
        <span>{currentUser?.role}</span>
      </nav>
    </header>
  );
};

export default Header;