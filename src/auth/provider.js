import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

import { LoginForm } from '../components/LoginForm';

export const AuthContext = createContext(null);
export const CategoryContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
  });

  const [category, setCategory] = useState(localStorage.getItem('category') || 'all');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const login = (token) => {
    setAuth({
      isAuthenticated: true,
      token,
    });
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      token: null,
    });
    localStorage.removeItem('authToken');
    clearCategory();
    router.push('/');
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    localStorage.setItem('category', newCategory);
  };

  const clearCategory = () => {
    setCategory('all');
    localStorage.removeItem('category');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken') || Cookies.get('jwt');
    if (storedToken) {
      setAuth({
        isAuthenticated: true,
        token: storedToken,
      });
      localStorage.setItem('authToken', storedToken);
    } else {
      setIsLoginModalOpen(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      <CategoryContext.Provider value={{ category, changeCategory, clearCategory }}>
        {children}
        <Modal isOpen={isLoginModalOpen} onRequestClose={() => setIsLoginModalOpen(false)}>
          <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
        </Modal>
      </CategoryContext.Provider>
    </AuthContext.Provider>
  );
};
