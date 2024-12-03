import { useState } from "react";
import {CarouselButton} from "../constants/Icons.jsx";

const slides = [
  {
    id: 1,
    image: "/slider-1.png",
    text: "ХОЧЕШЬ В ИТАЛИЮ? ЛЕГКО!",
  },
  {
    id: 2,
    image: "/slider-1.png",
    text: "ХОЧЕШЬ ВО ФРАНЦИЮ? ЛЕГКО!",
  },
  {
    id: 3,
    image: "/slider-1.png",
    text: "ХОЧЕШЬ В ГЕРМАНИЮ? ЛЕГКО!",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden top-[-78px] px-[5%]">
      {/* Слайд */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-64 flex-shrink-0 relative"
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                loading="lazy"
                className="w-full h-64 object-cover rounded-[2px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <h2 className="text-white text-4xl font-semibold">
                  {slide.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки переключения */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className={`text-4xl transition-all duration-300 ${
            currentIndex > 0
              ? "text-[#F86F00] text-5xl"
              : "text-[#595959]"
          }`}
        >
          <CarouselButton color={currentIndex > 0 ? "#F86F00" : "#595959"} />
        </button>
        <button
          onClick={nextSlide}
          className={`text-4xl transition-all duration-300 ${
            currentIndex < slides.length - 1
              ? "text-[#F86F00] text-5xl"
              : "text-[#595959]"
          }`}
        >
          <CarouselButton isRight={true} color={currentIndex < slides.length - 1 ? "#F86F00" : "#595959"} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
