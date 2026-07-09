const Header = ({ currentUser, onLogout }) => {
  return (
    <header className="app-header">
      <h1 className="app-header__logo">SYNERGY 5</h1>

      <nav className="app-header__nav">

        <button
          className="btn btn-gray btn-small"
          type="button"
          onClick={onLogout}
        >
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;