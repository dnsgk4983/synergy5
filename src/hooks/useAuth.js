import TEST_USERS from '../data/testUsers';
import { saveAuth, getAuth, clearAuth } from '../utils/authStorage';

const useAuth = () => {
  const login = (id, password) => {
    const user = TEST_USERS.find(
      (item) => item.id === id && item.password === password
    );

    if (!user) {
      return {
        success: false,
        message: '아이디 또는 비밀번호가 틀렸습니다.',
      };
    }

    saveAuth(user);

    return {
      success: true,
      user,
    };
  };

  const logout = () => {
    clearAuth();
  };

  const getCurrentUser = () => {
    return getAuth();
  };

  return {
    login,
    logout,
    getCurrentUser,
  };
};

export default useAuth;