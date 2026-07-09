const AUTH_KEY = 'synergy_auth';

export const saveAuth = (user) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const getAuth = () => {
  const savedUser = localStorage.getItem(AUTH_KEY);

  if (!savedUser) {
    return null;
  }

  return JSON.parse(savedUser);
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};