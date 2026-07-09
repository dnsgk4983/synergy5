import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Toast from '../../components/Toast';

const Login = ({ onLoginSuccess }) => {
  const { login } = useAuth();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showErrorToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const closeToast = () => {
    setIsToastVisible(false);
  };

  const handleLogin = () => {
    const result = login(id, password);

    if (!result.success) {
      showErrorToast(result.message);
      return;
    }

    closeToast();
    onLoginSuccess(result.user);
  };

  return (
    <main className="login">
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        type="error"
        onClose={closeToast}
      />

      <h1 className="login__title">SYNERGY 5</h1>

      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          className="login__input"
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="login__input"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login__button" type="submit">
          로그인
        </button>
      </form>
    </main>
  );
};

export default Login;