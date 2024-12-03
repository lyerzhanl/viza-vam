const Documents = () => {
  return (
    <div className="bg-blue-800 py-10 px-[5%] flex flex-col lg:flex-row items-start justify-between text-white">
      <div className="mb-6 lg:mb-0 lg:mr-8">
        <div className="py-2 px-4 rounded-[2px] shadow-md" style={{backgroundColor: "rgba(250, 250, 250, 0.3)", backdropFilter: "blur(60px)",}}>
          <h2 className="text-lg lg:text-3xl font-medium px-14 py-1">Основные документы</h2>
        </div>
      </div>

      <div className="bg-blue-700 bg-opacity-90 p-6 rounded-[2px] shadow-lg w-full lg:w-1/2" style={{backgroundColor: "rgba(250, 250, 250, 0.3)", backdropFilter: "blur(60px)",}}>
        <ul className="space-y-4">
          <li className="flex items-start">
            <img src="/check-light.svg" alt="Document" className="mr-4" />
            <div>
              <p className="text-sm lg:text-base font-medium">Паспорт</p>
            </div>
          </li>
          <li className="flex items-start">
            <img src="/check-light.svg" alt="Document" className="mr-4"/>
            <div>
              <p className="text-sm lg:text-base font-medium">Цветная фотография</p>
              <p className="text-sm text-blue-200">размер: 3,5×4,5 см, матовая бумага</p>
            </div>
          </li>
          <li className="flex items-start">
            <img src="/check-light.svg" alt="Document" className="mr-4"/>
            <div>
              <p className="text-sm lg:text-base font-medium">Справка с места работы</p>
              <p className="text-sm text-blue-200">с зарплатой за 3 месяца</p>
            </div>
          </li>
          <li className="flex items-start">
            <img src="/check-light.svg" alt="Document" className="mr-4"/>
            <div>
              <p className="text-sm lg:text-base font-medium">Справка о состоянии счёта</p>
            </div>
          </li>
          <li className="flex items-start">
            <img src="/check-light.svg" alt="Document" className="mr-4"/>
            <div>
              <p className="text-sm lg:text-base font-medium">Страховка</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Documents;