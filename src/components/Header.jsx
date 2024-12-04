const Header = () => {
  return (
    <header className='z-[1]'>
      <div className="flex bg-orange-500">
        <div className="bg-customBlue text-white flex items-center px-4 py-2" style={{
          width: '54%',
          paddingLeft: '5%',
          clipPath: 'polygon(0px 0px, 97% 0px, 100% 100%, 0px 100%)',
        }}>
          <span className="font-light">пр-т Победителей 17, офис 214</span>
          <span className="ml-6 font-light">09:00-18:00</span>
        </div>

        <div className="bg-orange-500 text-white flex items-center justify-end px-4 py-2"
             style={{width: '48%', paddingRight: '5%'}}>
          <a href="#" className="mx-2">
            <img src="/phone.svg" alt="Phone" className="h-5"/>
          </a>
          <a href="#" className="mx-2">
            <img src="/viber.svg" alt="Viber" className="h-5"/>
          </a>
          <a href="#" className="mx-2">
            <img src="/telegram.svg" alt="Telegram" className="h-5"/>
          </a>
          <a href="#" className="mx-2">
            <img src="/whatsapp.svg" alt="WhatsApp" className="h-5"/>
          </a>
          <a href="#" className="mx-2">
            <img src="/mail.svg" alt="Email" className="h-5"/>
          </a>
        </div>
      </div>

      <div className="text-black flex justify-between absolute w-full z-[1] items-center p-4 px-[5%]">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-20 mr-2"/>
        </div>
        <nav className="space-x-[40px]">
          <a href="/" className="hover:underline">
            Услуги
          </a>
          <a href="/" className="hover:underline">
            Контакты
          </a>
          <button className="bg-customBlue hover:bg-blue-500 text-white py-2 px-[25px] rounded-[2px]">
            Оформить заявку
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
