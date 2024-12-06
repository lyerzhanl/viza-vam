import { useState } from "react";

const Header = ({ onOpenModal, onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // Управление плавающей кнопкой

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = id === "#services" ? 80 : 150;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
        <div className="flex bg-orange-500">
          {/* Верхняя панель */}
          <div
            className="bg-customBlue text-white block sm:flex items-center sm:px-4 py-2 w-[54%] pl-[5%] clip-path-mobile clip-path-desktop"
          >
          <span className="font-light text-[10px] sm:text-base">
            пр-т Победителей 17, офис 214
          </span>
            <br/>
            <span className="sm:ml-6 font-light text-[10px] sm:text-base">09:00-19:00</span>
          </div>

          <div
            className="bg-orange-500 text-white items-center justify-end px-4 py-2 sm:flex hidden"
            style={{width: "48%", paddingRight: "5%"}}
          >
            <a
              href="https://wa.me/375257654320"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="h-5"/>
            </a>
            <a
              href="viber://chat?number=375295648334"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <img src="/viber.svg" alt="Viber" className="h-5"/>
            </a>
            <a
              href="https://t.me/+375295648334"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <img src="/telegram.svg" alt="Telegram" className="h-5"/>
            </a>
            <a href="tel:+375296800620" className="mr-2">
              <img src="/phone.svg" alt="Phone" className="h-5"/>
            </a>
            <a href="mailto:l336906097@gmail.com" className="mr-2">
              <img src="/mail.svg" alt="E-Mail" className="h-5"/>
            </a>
          </div>
        </div>

        {/* Логотип и навигация */}
        <div className="text-black flex justify-between w-full z-[1] items-center p-4 px-[5%]">
          <div className="flex items-center">
            <a href="#" className="hover:underline">
              <img src="/new-logo.svg" alt="Logo" className="h-14 sm:h-20 mr-2"/>
            </a>
          </div>
          {/* Бургер меню для мобильной версии */}
          <div className="sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src="/burger.svg" alt="Menu" className="h-4"/>
            </button>
          </div>
          {/* Навигация для десктопа */}
          <nav className="hidden sm:flex space-x-[40px]">
            <button onClick={() => handleScrollTo("#services")} className="hover:underline">
              Услуги
            </button>
            <button onClick={() => handleScrollTo("#contacts")} className="hover:underline">
              Контакты
            </button>
            <button
              onClick={onOpenModal}
              className="bg-customBlue hover:bg-blue-500 text-white py-2 px-[25px] rounded-[2px]"
            >
              Оформить заявку
            </button>
          </nav>
        </div>

        {/* Мобильное меню */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-[2] ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`bg-white w-3/4 h-full flex flex-col p-4 sidebar ${
              isMenuOpen ? "sidebar-open" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/close.svg" alt="Close"/>
            </button>
            <button className="py-2 text-lg" onClick={() => {
              handleScrollTo("#services")
              setIsMenuOpen(false);
            }}>
                Услуги
            </button>
            <button className="py-2 text-lg" onClick={() => {
              handleScrollTo("#contacts")
              setIsMenuOpen(false);
            }}>
                Контакты
            </button>
            <button
              className="bg-customBlue hover:bg-blue-500 text-white py-2 px-[25px] rounded-[2px] mt-4"
              onClick={() => {
                onOpenModal();
                setIsMenuOpen(false);
              }}
            >
              Оформить заявку
            </button>
          </div>
        </div>
      </header>
      {/* Фиксированная кнопка */}
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        {/* Основная кнопка */}
        <button
          onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
          className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center"
        >
          <img src="/request.svg" alt="Контакты" className="w-12 h-12"/>
        </button>

        {/* Раскрывающееся меню */}
        {isFloatingMenuOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-3">
            <a
              href="https://wa.me/375257654320"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-12 h-12"/>
            </a>
            <a
              href="viber://chat?number=375295648334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
            >
              <img src="/viber.svg" alt="Viber" className="w-12 h-12"/>
            </a>
            <a
              href="https://t.me/+375295648334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
            >
              <img src="/telegram.svg" alt="Telegram" className="w-12 h-12"/>
            </a>
            <a
              href="mailto:l336906097@gmail.com"
              className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
            >
              <img src="/email.svg" alt="Email" className="w-12 h-12"/>
            </a>
            <a
              href="tel:+375296800620"
              className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
            >
              <img src="/call.svg" alt="Phone" className="w-12 h-12"/>
            </a>
            <button
              onClick={onOpenModal}
              className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white"
            >
              <img src="/floating-button.svg" alt="Email" className="w-12 h-12"/>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
