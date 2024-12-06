import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './components/NotFoundPage';
import Modal from './components/Modal';
import { useRef, useState } from 'react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const heroRef = useRef(null); // Ссылка на верхнюю часть
  const servicesRef = useRef(null); // Ссылка на Services
  const footerRef = useRef(null); // Ссылка на Footer

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Функция прокрутки
  const handleScrollTo = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          onOpenModal={handleOpenModal}
        />
        <main className="flex-grow z-1">
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  onOpenModal={handleOpenModal}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </Router>
  );
};

export default App;
