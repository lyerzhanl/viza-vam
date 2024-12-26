const Hero = ({onOpenModal}) => {
  return (
    <section
      className="lg:px-16 lg:mt-[40px] mt-[170px] pb-32 lg:pb-0 z-0 flex flex-col lg:flex-row items-center lg:items-start relative">
      {/* Левая часть */}
      <div className="lg:absolute left-0 top-1/3 w-full lg:w-1/2 text-left lg:text-left z-10 px-[5%]">
        <h1 className="text-4xl lg:text-6xl font-semibold text-black">
          ПРЕВРАТИ МЕЧТЫ<br/>
          В РЕАЛЬНОСТЬ
        </h1>
        <p
          className="lg:mt-4 pl-6 text-xl lg:text-3xl text-[#F86F00] font-caveat transform rotate-[-4deg] opacity-65"
        >
          Начни подготовку к путешествию прямо сейчас
        </p>
      </div>

      {/* Правая часть */}
      <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
        {/* Изображение */}
        <img
          src="/banner-hero.svg"
          alt="Оформление виз с VisaVam.by – Легко и Доступно"
          className="relative lg:top-0 lg:left-[30%] lg:w-[55%]"
        />

        <div className="lg:hidden w-full px-[5%] pb-20">
          <button
            onClick={onOpenModal}
            className="relative w-[100%] bg-customBlue hover:bg-blue-500 text-white py-3 rounded-[2px]">
            Оформить заявку
          </button>
        </div>

        {/* Список преимуществ */}
        <ul
          className="lg:absolute top-1/2 right-[4%] lg:transform lg:-translate-y-1/2 space-y-4 text-left p-4 rounded-md">
          <li className="flex items-center text-lg">
            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
            <p className="font-[500] text-[20px]">
              Более 10 лет <br/>
              <span className="text-[16px] text-[#808080]">на рынке</span>
            </p>
          </li>
          <li className="flex items-center text-lg">
            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
            <p className="font-[500] text-[20px]">
              20 000+<br/>
              <span className="text-[16px] text-[#808080]">успешных кейсов</span>
            </p>
          </li>
          <li className="flex items-center text-lg">
            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
            <p className="font-[500] text-[20px]">
              10 000+<br/>
              <span className="text-[16px] text-[#808080]">довольных клиентов</span>
            </p>
          </li>
          <li className="flex items-center text-lg font-[500] text-[20px]">
            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
            Персональный подход
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Hero;