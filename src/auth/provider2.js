import { Provider } from 'next-auth/client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Modal from 'react-modal';
import { CategoryContext } from '../context/category';
import { useSession } from 'next-auth/client';

Modal.setAppElement('#__next');

const AppProvider = ({ Component, pageProps }) => {
  const [category, setCategory] = useState('All');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [session] = useSession();

  useEffect(() => {
    const storedCategory = localStorage.getItem('category');
    if (storedCategory) {
      setCategory(storedCategory);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!session) {
        setModalIsOpen(true);
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [session]);

  const handleCategoryChange = (category) => {
    setCategory(category);
    localStorage.setItem('category', category);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Provider session={pageProps.session}>
      <CategoryContext.Provider value={{ category, handleCategoryChange }}>
        <Component {...pageProps} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModalClose}
          contentLabel="Login Modal"
        >
          <h2>You must be logged in to access this site</h2>
          <button onClick={() => signIn()}>Sign In</button>
        </Modal>
      </CategoryContext.Provider>
    </Provider>
  );
};

export default AppProvider;
