const countries = [
  { name: "🇵🇱 Польша" },
  { name: "🇸🇮 Словения" },
  { name: "🇩🇪 Германия" },
  { name: "🇪🇸 Испания" },
  { name: "🇫🇷 Франция" },
  { name: "🇱🇹 Литва" },
  { name: "🇱🇻 Латвия" },
  { name: "🇦🇹 Австрия" },
  { name: "🇺🇸 США" },
  { name: "🇬🇧 Великобритания" },
  { name: "🇧🇬 Болгария" },
  { name: "🇳🇱 Нидерланды" },
  { name: "🇬🇷 Греция" },
  { name: "🇭🇺 Венгрия" },
  { name: "🇮🇹 Италия" },
  { name: "🇷🇺 Россия", subtitle: "(для не граждан РБ)" },
];

const Services = () => {
  return (
    <div className="px-[5%]">
      <h2 className="text-3xl font-medium mb-16">Услуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <div key={index} className="bg-white border border-[#ECECEC] rounded-[2px] overflow-hidden shadow-sm">
            <img src="/poland.png" alt={country.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-center font-medium">{country.name}</p>
              {country.subtitle && <p className="text-center text-sm text-gray-500">{country.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;