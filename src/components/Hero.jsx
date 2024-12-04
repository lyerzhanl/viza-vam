const Hero = () => {
  return (
    <section className="md:px-16 mt-[40px] z-0 flex flex-col md:flex-row items-center md:items-start px-[5%] relative">
      {/* Левая часть */}
      <div className="absolute left-0 top-1/3 md:w-1/2 text-left md:text-left z-10 px-[5%]">
        <h1 className="text-2xl md:text-6xl font-semibold text-black">
          ВИЗОВЫЙ<br />ЦЕНТР МИНСК
        </h1>
        <p
          className="mt-4 pl-6 text-lg md:text-3xl text-[#F86F00] font-caveat transform rotate-[-4deg] opacity-65"
        >
          Помогаем превратить мечты в реальность
        </p>
      </div>

      {/* Правая часть */}
      <div className="w-full flex items-center mt-4 md:mt-0 relative z-5">
        {/* Изображение */}
        <img
          src="/banner-hero.svg"
          alt="Героическое изображение"
          className="relative left-[30%] w-full md:w-[800px]"
        />

        {/* Список преимуществ */}
        <ul className="absolute top-1/2 right-[70px] transform -translate-y-1/2 space-y-4 text-left p-4 rounded-md">
          <li className="flex items-center text-lg">
            <img src="/check.svg" alt="Check" className="h-5 w-5 mr-2"/>
            <p className="font-[500] text-[20px]">
              Более 10 лет <br/>
              <span className="text-[16px] text-[#808080]">на рынке</span>
            </p>
          </li>
          <li className="flex items-center text-lg">
            <img src="/check.svg" alt="Check" className="h-5 w-5 mr-2"/>
            <p className="font-[500] text-[20px]">
              20 000+<br/>
              <span className="text-[16px] text-[#808080]">успешных кейсов</span>
            </p>
          </li>
          <li className="flex items-center text-lg">
            <img src="/check.svg" alt="Check" className="h-5 w-5 mr-2"/>
            <p className="font-[500] text-[20px]">
              10 000+<br/>
              <span className="text-[16px] text-[#808080]">довольных клиентов</span>
            </p>
          </li>
          <li className="flex items-center text-lg font-[500] text-[20px]">
            <img src="/check.svg" alt="Check" className="h-5 w-5 mr-2"/>
            Персональный подход
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Hero;