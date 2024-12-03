const Steps = () => {
  return (
    <div className="w-full px-[5%] py-24">
      <h2 className="text-3xl font-medium mb-16">3 простых шага до мечты</h2>

      <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:gap-6">
        {/* Step 1 */}
        <div
          className="flex flex-col relative items-center justify-center text-center bg-[#FAFAFA] rounded-[2px] w-[12%] py-5"
          style={{
            border: "1px solid #ECECEC",
            transform: "rotate(10deg)",
          }}
        >
          <img src="/step-1.svg" alt="Заявка" className="h-20" style={{transform: 'rotate(-5deg)'}}/>
          <p className="text-sm font-medium">Оформление<br/>заявки на сайте</p>
        </div>

        {/* Connector */}
        <img src="/curve-1.svg" alt="Curve" className="hidden lg:block h-9 absolute left-[31%] z-[-1]"/>

        {/* Step 2 */}
        <div
          className="flex flex-col relative items-center text-center bg-[#FAFAFA] rounded-[2px] w-[15%] py-8"
          style={{border: "1px solid #ECECEC",}}
        >
          <img src="/step-2.svg" alt="Документы" className="h-20"/>
          <p className="text-sm font-medium">Личная встреча в офисе и<br/>проверка документов</p>
        </div>

        {/* Connector */}
        <img src="/curve-1.svg" alt="Curve" className="hidden lg:block h-9 absolute left-[55%] z-[-1]"
             style={{transform: 'rotate(180deg)'}}/>

        {/* Step 3 */}
        <div
          className="flex flex-col relative items-center text-center bg-[#FAFAFA] rounded-[2px] w-[12%] py-5"
          style={{border: "1px solid #ECECEC", transform: "rotate(-10deg)",}}
        >
          <img src="/step-3.svg" alt="Одобрение" className="h-20" style={{transform: 'rotate(9deg)'}}/>
          <p className="text-sm font-medium">Одобрение</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
