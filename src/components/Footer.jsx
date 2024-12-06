const Footer = () => {
  return (
    <footer id="contacts" className="bg-orange-500 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-[5%] py-8 relative">
        {/* Первая колонка (Юридическая информация) */}
        <div className="w-full mt-16 lg:w-[50%] order-3 lg:order-1">
          <h3 className="text-sm">{`Общество с ограниченной ответственностью "Визовый Сервис"`}</h3>
          <p className="text-sm">УНП 193637145</p>
          <p className="text-sm mb-4">Гос. регистрация N 193637145 от 22.07.2022 Минский горисполком</p>
          <p className="text-sm mb-4">
            Юридический адрес: <br />
            РЕСПУБЛИКА БЕЛАРУСЬ, г. Минск, 220004, пр. Победителей, д. 17, оф. 1204 <br />
            Директор Андронова Ядвига Казимировна
          </p>
          <p className="text-sm">БИК банка<br />UNBSBY2X</p>
          <p className="text-sm">IBAN<br />BY53 UNBS 3012 1603 7000 0000 1933</p>
          <p className="text-sm">{`Банк: ЗАО "БСБ Банк"`}</p>
        </div>

        {/* Вторая и третья колонки (Услуги и Контакты) */}
        <div className="w-full lg:w-[50%] flex flex-row gap-8 order-1 lg:order-2">

          {/* Третья колонка (Контакты и иконки) */}
          <div className="w-full lg:w-[50%]">
            <h3 className="text-lg mb-4">Контакты</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <img src="/phone-white.svg" className="mr-2" />
                <a href="tel:+375296800620" className="hover:underline">+375296800620</a>
              </li>
              <li className="flex items-center">
                <img src="/email-white.svg" className="mr-2" />
                <a href="mailto:info@vizaminsk.by" className="hover:underline">info@vizaminsk.by</a>
              </li>
              <li className="flex items-center">
                <img src="/location-white.svg" className="mr-2" />
                Минск, пр. Победителей 17, офис 1204<br />(метро Немига)
              </li>
              <li className="flex items-center">
                <img src="/location-white.svg" className="mr-2 opacity-0" />
                Пн-Пт: 09:00 - 19:00 <br />
                Суббота: 10:00 - 14:00 <br />
                Воскресенье: выходной
              </li>
            </ul>
            <div className="center-absolute flex justify-center lg:justify-start space-x-8 mt-4 lg:mt-16">
              <a href="https://www.instagram.com/vizaminsk.by/profilecard/?igsh=YnRwZGh4Y3Jld2pj" aria-label="Instagram" className="hover:opacity-80">
                <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="viber://chat?number=375295648334" aria-label="Viber" className="hover:opacity-80">
                <img src="/viber.svg" alt="Viber" className="w-8 h-8" />
              </a>
              <a href="https://wa.me/375257654320" aria-label="WhatsApp" className="hover:opacity-80">
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
              </a>
              <a href="https://t.me/+375295648334" aria-label="Telegram" className="hover:opacity-80">
                <img src="/telegram.svg" alt="Telegram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="bg-blue-800 py-4 mt-6 px-[5%]">
        <a
          href="/public-offer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#E6E6E6] underline"
        >
          Публичная оферта
        </a>
      </div>
    </footer>
  );
};

export default Footer;
