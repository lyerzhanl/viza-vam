import { useState } from "react";

const faqData = [
  {
    question: "Предоставляется ли семьям скидка на Ваши услуги?",
    answer:
      "Делая визу у нас всей семьей, вы получаете скидку 5% на наши услуги. Мы поможем собрать все документы для детей и взрослых быстро и в срок.",
  },
  {
    question: "Каковы способы оплаты Ваших услуг?",
    answer:
      "Мы принимаем оплату наличными, банковскими картами и через электронные кошельки.",
  },
  {
    question: "Как мне отслеживать статус обращения?",
    answer:
      "Вы можете отслеживать статус обращения в личном кабинете на нашем сайте или связаться с менеджером.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="pt-12 px-[5%]">
      <h2 className="text-3xl font-medium mb-16">Вопрос-ответ</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-orange-500 rounded-t-[2px]">
            <button
              className="flex justify-between items-center w-full bg-orange-500 text-white py-4 px-6 font-medium text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>В: {faq.question}</span>
              <span>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-180 transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="bg-white py-4 px-6 text-gray-700">
                О: {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
