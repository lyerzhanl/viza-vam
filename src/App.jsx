import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './components/NotFoundPage';
import Modal from './components/Modal';
import { useState } from 'react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onOpenModal={handleOpenModal} />
        <main className="flex-grow z-1">
          <Routes>
            <Route
              path="/"
              element={<LandingPage onOpenModal={handleOpenModal} />}
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
