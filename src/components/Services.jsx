const countries = [
  { name: "Польша", img: "/poland.png", svg: "/poland_flag.svg" },
  { name: "Словения", img: "/slovenia.png", svg: "/slovenia_flag.svg" },
  { name: "Германия", img: "/germany.png", svg: "/germany_flag.svg" },
  { name: "Испания", img: "/spain.png", svg: "/spain_flag.svg" },
  { name: "Франция", img: "/france.png", svg: "/france_flag.svg" },
  { name: "Литва", img: "/litva.png", svg: "/litva_flag.svg" },
  { name: "Латвия", img: "/latvia.png", svg: "/latvia_flag.svg" },
  { name: "Австрия", img: "/austria.png", svg: "/austria_flag.svg" },
  { name: "США", img: "/usa.png", svg: "/usa_flag.svg" },
  { name: "Великобритания", img: "/greatbritain.png", svg: "/greatbritain_flag.svg" },
  { name: "Болгария", img: "/bulgaria.png", svg: "/bulgaria_flag.svg" },
  { name: "Нидерланды", img: "/netherland.png", svg: "/netherland_flag.svg" },
  { name: "Греция", img: "/greece.png", svg: "/greece_flag.svg" },
  { name: "Венгрия", img: "/hungary.png", svg: "/hungary_flag.svg" },
  { name: "Италия", img: "/italy.png", svg: "/italy_flag.svg" },
  { name: "Россия", subtitle: "(для не граждан РБ)", img: "/russia.png", svg: "/russia_flag.svg" },
];

const Services = () => {
  return (
    <div className="px-[5%]">
      <h2 className="text-3xl font-medium mb-16">Услуги</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <div key={index} className="bg-white border border-[#ECECEC] rounded-[2px] overflow-hidden shadow-sm">
            <img src={country.img} alt={country.name} className="w-full object-cover" />
            <div className="p-4">
              <div className='flex flex-row gap-2'>
                <img src={country.svg} alt={country.name} className="h-6"/>
                <p className="font-medium">{country.name}</p>
              </div>
              {country.subtitle && <p className="text-sm text-gray-500">{country.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;