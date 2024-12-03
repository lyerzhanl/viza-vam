import { useState } from "react";
import { CarouselButton } from "../constants/Icons.jsx";

const reviews = [
  {
    id: 1,
    name: "Виктор Бородин",
    text: "Спасибо большое за помощь. Получил визу легко и быстро. Отличный сервис и профессионалы. Буду обращаться в дальнейшем только сюда и всем рекомендую.",
    image: "/avatar.png",
  },
  {
    id: 2,
    name: "Антон Петровский",
    text: "Спасибо большое за помощь. Получил визу легко и быстро. Отличный сервис и профессионалы. Буду обращаться в дальнейшем только сюда и всем рекомендую.",
    image: "/avatar.png",
  },
  {
    id: 3,
    name: "Евгений Смирнов",
    text: "Спасибо большое за помощь. Получил визу легко и быстро. Отличный сервис и профессионалы. Буду обращаться в дальнейшем только сюда и всем рекомендую.",
    image: "/avatar.png",
  },
  {
    id: 4,
    name: "Аркадий Петровский",
    text: "Спасибо большое за помощь. Получил визу легко и быстро. Отличный сервис и профессионалы. Буду обращаться в дальнейшем только сюда и всем рекомендую.",
    image: "/avatar.png",
  },
  {
    id: 5,
    name: "Коля Петровский",
    text: "Спасибо большое за помощь. Получил визу легко и быстро. Отличный сервис и профессионалы. Буду обращаться в дальнейшем только сюда и всем рекомендую.",
    image: "/avatar.png",
  },
  {
    id: 6,
    name: "Сергей Иванов",
    text: "Спасибо большое за помощь. Получил визу легко и быстро. Отличный сервис и профессионалы. Буду обращаться в дальнейшем только сюда и всем рекомендую.",
    image: "/avatar.png",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;

  const nextSlide = () => {
    if (currentIndex < reviews.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCards);

  return (
    <div className="py-12 px-[5%]">
      <h2 className="text-3xl font-medium mb-16">Отзывы наших клиентов</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleReviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-[2px] p-6 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
            <img
              src={review.image}
              alt={review.name}
              loading={"lazy"}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold mb-2">{review.name}</h3>
            <p className="text-sm text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          disabled={currentIndex === 0}
        >
          <CarouselButton color={currentIndex > 0 ? "#F86F00" : "#595959"} />
        </button>
        <button
          onClick={nextSlide}
          className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
          disabled={currentIndex >= reviews.length - visibleCards}
        >
          <CarouselButton isRight={true} color={currentIndex < reviews.length - visibleCards ? "#F86F00" : "#595959"} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;