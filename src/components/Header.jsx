import { useState } from "react";

const Header = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // Управление плавающей кнопкой

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
            <span className="sm:ml-6 font-light text-[10px] sm:text-base">09:00-18:00</span>
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
            <img src="/logo.svg" alt="Logo" className="h-14 sm:h-20 mr-2"/>
          </div>
          {/* Бургер меню для мобильной версии */}
          <div className="sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src="/burger.svg" alt="Menu" className="h-4"/>
            </button>
          </div>
          {/* Навигация для десктопа */}
          <nav className="hidden sm:flex space-x-[40px]">
            <a href="/" className="hover:underline">
              Услуги
            </a>
            <a href="/" className="hover:underline">
              Контакты
            </a>
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
            <a href="/" className="py-2 text-lg">
              Услуги
            </a>
            <a href="/" className="py-2 text-lg">
              Контакты
            </a>
            <button
              className="bg-customBlue hover:bg-blue-500 text-white py-2 px-[25px] rounded-[2px] mt-4"
              onClick={onOpenModal}
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
          className="w-12 h-12 rounded-full text-white flex items-center justify-center"
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
